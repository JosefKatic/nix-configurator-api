import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class HomePolkitAgentInput {
  @Field(() => Boolean, { nullable: true })
  enable: boolean;
}
