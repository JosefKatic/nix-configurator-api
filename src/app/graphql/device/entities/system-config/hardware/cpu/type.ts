import { Field, ObjectType } from '@nestjs/graphql';
import { CpuIntel } from './intel';
import { CpuAMD } from './amd';

@ObjectType()
export class Cpu {
  @Field(() => CpuIntel, { nullable: false })
    intel: CpuIntel;

  @Field(() => CpuAMD, { nullable: false })
    amd: CpuAMD;
}
