import { Injectable, Logger } from '@nestjs/common';
import { Device } from './entities/device.entity';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom, map, of, switchMap } from 'rxjs';
import { ConfigService } from '@nestjs/config';
import { AxiosError } from 'axios';
import { SystemConfigInput } from './entities/system-config';
import { HomeConfigInput } from './entities/home-config';

@Injectable()
export class DeviceService {
  private readonly logger = new Logger(DeviceService.name);

  constructor(
    @InjectQueue('device') private readonly deviceQueue: Queue,
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async findAll(): Promise<string[]> {
    const response = await firstValueFrom(
      this.httpService
        .get<string>(
          `https://raw.githubusercontent.com/JosefKatic/nix-config/refs/heads/main/config/nixos/hosts.nix`,
          {},
        )
        .pipe(
          catchError((error: AxiosError) => {
            this.logger.error(error.response.data);
            throw 'An error happened!';
          }),
        ),
    );
    return response.data
      .replace(/[\[\]]/g, '')
      .replace(/"/g, '') // Remove brackets
      .trim()
      .split(/\s+/);
  }

  async findConfig(
    hostname: string,
    username: string,
    type: 'HOME' | 'SYSTEM',
  ) {
    const systemPath = `nixos/${hostname}`;
    const homePath = `home/${hostname}/${username}`;
    const response = await firstValueFrom(
      this.httpService
        .get(
          `https://raw.githubusercontent.com/JosefKatic/nix-config/refs/heads/main/config/${type == 'SYSTEM' ? systemPath : homePath}/generated.nix`,
          {},
        )
        .pipe(
          catchError((error: AxiosError) => {
            this.logger.error(error.response.data);
            return of({ data: null });
          }),
        ),
    );
    if (!response.data) {
      return response.data;
    }
    let dataArr = response.data
      .split('\n')
      .filter((line) => line.includes('='));
    let parsedArr = [];
    for (const line of dataArr) {
      const [key, value] = line.trim().split(' = ');
      let formattedValue = value.replace(/"/g, '').slice(0, -1).trim();
      if (formattedValue.startsWith('[') && formattedValue.endsWith(']')) {
        formattedValue = formattedValue
          .replace(/[\[\]]/g, '')
          .replace(/"/g, '')
          .trim()
          .split(/\s+/);
        formattedValue = formattedValue.filter((item) => item !== '');
      } else if (['true', 'false'].includes(formattedValue)) {
        formattedValue = formattedValue.toLowerCase() === 'true';
      }
      parsedArr.push([key.trim(), formattedValue]);
    }
    let result = {};
    for (const [key, value] of parsedArr) {
      const keySplit = key.split('.');
      let currentLevel = result;
      for (let i = 0; i < keySplit.length; i++) {
        const part = keySplit[i];
        if (i === keySplit.length - 1) {
          currentLevel[part] = value;
        } else {
          if (!currentLevel[part]) {
            currentLevel[part] = {};
          }
          currentLevel = currentLevel[part];
        }
      }
    }
    return type === 'SYSTEM' ? result['device'] : result['user'];
  }

  async getFromHeadscale(hostnames: string[]) {
    const url = `${this.configService.get<string>('HEADSCALE_URL')}/api/v1/node`;
    const devices: Device[] = [];
    const { data } = await firstValueFrom(
      this.httpService.get<{ nodes: any }>(url, {
        headers: {
          Authorization: `Bearer ${this.configService.get<string>('HEADSCALE_API')}`,
        },
      }),
    );
    for (const hostname of hostnames) {
      const headscaleDevice = data['nodes'].find(
        (element) => element.name === hostname,
      );
      if (headscaleDevice) {
        devices.push({
          hostname,
          ip: headscaleDevice.ipAddresses[0],
          isOnline: headscaleDevice.online,
        });
      }
    }
    return devices;
  }

  async update(
    hostname: string,
    type: 'HOME' | 'SYSTEM',
    updatedConfig: SystemConfigInput | HomeConfigInput,
    username: string,
  ) {
    try {
      const convertedInput = this.convertToDotNotation(updatedConfig);
      await this.deviceQueue.add('push', {
        hostname,
        username,
        type: type,
        updatedConfig: convertedInput,
      });
      return { hostname };
    } catch (error) {
      this.logger.error(error);
    }
  }

  private convertToDotNotation(
    obj: SystemConfigInput | HomeConfigInput,
    parent = '',
    res = {},
  ) {
    for (let key in obj) {
      let newKey = parent ? `${parent}.${key}` : key;
      if (
        typeof obj[key] === 'object' &&
        obj[key] !== null &&
        !(obj[key] instanceof Array)
      ) {
        this.convertToDotNotation(obj[key], newKey, res);
      } else {
        res[newKey] = obj[key];
      }
    }
    return res;
  }
}
