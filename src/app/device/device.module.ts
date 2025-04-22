import { Module } from '@nestjs/common';
import { DeviceService } from './device.service';
import { DeviceResolver } from './device.resolver';
import { BullModule } from '@nestjs/bullmq';
import { BullBoardModule } from '@bull-board/nestjs';
import { BullMQAdapter } from '@bull-board/api/bullMQAdapter';
import { DeviceConsumer } from './device.consumer';
import { HttpModule } from '@nestjs/axios';
@Module({
  imports: [
    BullModule.registerQueue({ name: 'device' }),
    BullBoardModule.forFeature({
      name: 'device',
      adapter: BullMQAdapter, //or use BullAdapter if you're using bull instead of bullMQ
    }),
    HttpModule,
  ],
  providers: [DeviceResolver, DeviceService, DeviceConsumer],
})
export class DeviceModule {}
