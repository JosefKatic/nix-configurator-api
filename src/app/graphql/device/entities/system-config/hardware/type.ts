import { Field, ObjectType } from '@nestjs/graphql';
import { Bluetooth } from './bluetooth';
import { Cpu } from './cpu';
import { Gpu } from './gpu';
import { Disks } from './disks';
import { Misc } from './misc';

@ObjectType()
export class Hardware {
  @Field(() => Bluetooth, {nullable: false})
    bluetooth: Bluetooth;

  @Field(() => Cpu, {nullable: false})
    cpu: Cpu;

  @Field(() => Gpu, {nullable: false})
    gpu: Gpu;

  @Field(() => Disks, {nullable: false})
    disks: Disks;

  @Field(() => Misc, {nullable: false})
    misc: Misc;
}
