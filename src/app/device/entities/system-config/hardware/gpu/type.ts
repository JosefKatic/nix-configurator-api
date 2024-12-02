import { Field, ObjectType } from '@nestjs/graphql';
import { GpuIntel } from './intel';
import { GpuAMD } from './amd';
import { GpuNvidia } from './nvidia';

@ObjectType()
export class Gpu {
  @Field(() => GpuIntel, { nullable: false })
    intel: GpuIntel;

  @Field(() => GpuAMD, { nullable: false })
    amd: GpuAMD;

  @Field(() => GpuNvidia, {
    nullable: false,
    defaultValue: { enable: false }
  })
    nvidia: GpuNvidia;
}
