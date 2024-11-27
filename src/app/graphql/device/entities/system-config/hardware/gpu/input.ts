import { Field, InputType } from '@nestjs/graphql';
import { GpuIntelInput } from './intel';
import { GpuAMDInput } from './amd';
import { GpuNvidiaInput } from './nvidia';

@InputType()
export class GpuInput {
  @Field(() => GpuIntelInput, { nullable: true })
  intel: GpuIntelInput;

  @Field(() => GpuAMDInput, { nullable: true })
  amd: GpuAMDInput;

  @Field(() => GpuNvidiaInput, { nullable: true })
  nvidia: GpuNvidiaInput;
}
