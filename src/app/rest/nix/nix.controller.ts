import {
  Controller,
  Get,
  Param
} from '@nestjs/common';
import { NixService } from './nix.service';

@Controller('nix')
export class NixController {
  constructor(private readonly nixService: NixService) {
  }

  // @Get('devices')
  // async getHostnames() {
  //   const devices = await this.nixService.findAll();
  //   return devices.map(({ hostname }) => hostname);
  // }

  // @Get(':hostname')
  // async findOne(@Param('hostname') hostnameInput: string) {
  //   const { hostname, systemConfig, _id } = await this.nixService.findOne(hostnameInput);
  //   return {
  //     device: systemConfig
  //   };
  // }


  // @Get(':hostname/version')
  // async getVersion(@Param('hostname') hostnameInput: string) {
  //   const { hostname, systemConfig, _id } = await this.nixService.findOne(hostnameInput);
  //   return systemConfig.build;
  // }
}
