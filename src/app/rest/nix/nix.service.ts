import { Injectable } from '@nestjs/common';
import { Device, DeviceDocument } from '../../graphql/device/entities/device.entity';
import { Model } from 'mongoose';

@Injectable()
export class NixService {

  constructor(@InjectModel(Device.name) private deviceModel: Model<DeviceDocument>
  ) {
  }

  findAll() {
    return this.deviceModel.find().exec();
  }

  findOne(hostname: string) {
    return this.deviceModel.findOne({ hostname }).exec();
  }
}
