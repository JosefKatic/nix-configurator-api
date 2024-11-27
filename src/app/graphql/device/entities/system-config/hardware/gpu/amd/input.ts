import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GpuAMDInput {
  @Field(() => Boolean, { nullable: true })
  enable: boolean;
}
