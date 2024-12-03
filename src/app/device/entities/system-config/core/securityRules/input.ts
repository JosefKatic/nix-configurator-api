import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class SecurityRulesInput {
  @Field(() => Boolean, { nullable: true })
  enable: boolean;
}