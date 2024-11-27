import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GpuIntelInput {
  @Field(() => Boolean, { nullable: true })
  enable: boolean;
}
