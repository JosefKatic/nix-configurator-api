import { Field, InputType } from '@nestjs/graphql';
import { CpuIntelInput } from './intel';
import { CpuAMDInput } from './amd';

@InputType()
export class CpuInput {
  @Field(() => CpuIntelInput, { nullable: true })
  intel: CpuIntelInput;

  @Field(() => CpuAMDInput, { nullable: true })
  amd: CpuAMDInput;
}
