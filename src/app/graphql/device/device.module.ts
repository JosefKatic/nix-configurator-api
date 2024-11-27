import { Module } from '@nestjs/common';
import { DeviceService } from './device.service';
import { DeviceResolver } from './device.resolver';
import { BullModule } from '@nestjs/bullmq';
import { DeviceConsumer } from './device.consumer';
import { HttpModule } from '@nestjs/axios';
@Module({
  imports: [BullModule.registerQueue({ name: 'device' }), HttpModule],
  providers: [DeviceResolver, DeviceService, DeviceConsumer],
})
export class DeviceModule {}
