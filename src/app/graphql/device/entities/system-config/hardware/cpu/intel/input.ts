import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CpuIntelInput {
  @Field(() => Boolean, { nullable: true })
  enable: boolean;
}
