import { Field, InputType } from '@nestjs/graphql';
import { BluetoothInput } from './bluetooth';
import { CpuInput } from './cpu';
import { GpuInput } from './gpu';
import { DisksInput } from './disks';
import { MiscInput } from './misc';

@InputType()
export class HardwareInput {
  @Field(() => BluetoothInput, { nullable: true })
  bluetooth: BluetoothInput;

  @Field(() => CpuInput, { nullable: true })
  cpu: CpuInput;

  @Field(() => GpuInput, { nullable: true })
  gpu: GpuInput;

  @Field(() => DisksInput, { nullable: true })
  disks: DisksInput;

  @Field(() => MiscInput, { nullable: true })
  misc: MiscInput;
}
