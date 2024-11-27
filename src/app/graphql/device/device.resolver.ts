import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { DeviceService } from './device.service';
import { Device, DeviceConfig } from './entities/device.entity';
import { GqlAuthGuard } from '../../auth/gql.guard';
import { Logger, UseGuards } from '@nestjs/common';
import { CurrentUser } from '../../auth/user.decorator';
import {
  UpdateHomeConfigInput,
  UpdateSystemConfigInput,
} from './dto/update-device.input';
import { createHash } from 'crypto';

@Resolver(() => Device)
@UseGuards(GqlAuthGuard)
export class DeviceResolver {
  private readonly logger = new Logger(DeviceResolver.name);

  constructor(private readonly deviceService: DeviceService) {}

  @Query(() => [Device], { name: 'devices' })
  async findAll(@CurrentUser() user: { groups: string[] }) {
    const hostnames = await this.deviceService.findAll();
    if (user.groups.includes('admin')) {
      return this.deviceService.getFromHeadscale(hostnames);
    }
    const groups = user.groups
      .filter((role) => role.includes('.clients.joka00.dev'))
      .map((elem) => elem.replace('.clients.joka00.dev', ''));
    const filteredHostnames = hostnames.filter((hostname) =>
      groups.includes(hostname),
    );
    const result = await this.deviceService.getFromHeadscale(filteredHostnames);
    return result;
  }

  @Query(() => DeviceConfig, { name: 'device' })
  async findConfig(
    @CurrentUser() user,
    @Args('hostname', { type: () => String }) hostname: string,
  ) {
    const systemConfig = await this.deviceService.findConfig(
      hostname,
      user.preferred_username,
      'SYSTEM',
    );
    const homeConfig = await this.deviceService.findConfig(
      hostname,
      user.preferred_username,
      'HOME',
    );
    return {
      hostname,
      systemConfig,
      homeConfig,
    };
  }

  @Mutation(() => Device)
  updateSystemConfig(
    @CurrentUser() user,
    @Args('updateDeviceInput') updateDeviceInput: UpdateSystemConfigInput,
  ) {
    updateDeviceInput.updatedConfig['build'] = createHash('sha256')
      .update(updateDeviceInput.hostname + Date.now())
      .digest('hex');
    return this.deviceService.update(
      updateDeviceInput.hostname,
      'SYSTEM',
      updateDeviceInput.updatedConfig,
      user.username,
    );
  }

  @Mutation(() => Device)
  updateHomeConfig(
    @CurrentUser() user,
    @Args('updateDeviceInput') updateDeviceInput: UpdateHomeConfigInput,
  ) {
    updateDeviceInput.updatedConfig['build'] = createHash('sha256')
      .update(updateDeviceInput.hostname + Date.now())
      .digest('hex');
    return this.deviceService.update(
      updateDeviceInput.hostname,
      'HOME',
      updateDeviceInput.updatedConfig,
      user.preferred_username,
    );
  }
}
