import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class KdeConnectInput {
  @Field(() => Boolean, { nullable: true })
  enable: boolean;
}
