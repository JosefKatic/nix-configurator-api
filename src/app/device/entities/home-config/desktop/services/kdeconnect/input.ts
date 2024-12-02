import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class HomeKdeConnectInput {
  @Field(() => Boolean, { nullable: true })
  enable: boolean;
}
