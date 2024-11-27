import { Module } from '@nestjs/common';
import { NixService } from './nix.service';
import { NixController } from './nix.controller';
import { Device, DeviceSchema } from '../../graphql/device/entities/device.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Device.name, schema: DeviceSchema }])],
  controllers: [NixController],
  providers: [NixService]
})
export class NixModule {
}
