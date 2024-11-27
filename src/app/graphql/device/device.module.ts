import { Module } from '@nestjs/common';
import { DeviceService } from './device.service';
import { DeviceResolver } from './device.resolver';
import { Device, DeviceSchema } from './entities/device.entity';
import { BullModule } from '@nestjs/bullmq';
import { DeviceConsumer } from './device.consumer';
import { HttpModule } from '@nestjs/axios';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Device.name, schema: DeviceSchema }]),
    BullModule.registerQueue({ name: 'device' }),
    HttpModule,
  ],
  providers: [DeviceResolver, DeviceService, DeviceConsumer],
})
export class DeviceModule {}
