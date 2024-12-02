import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class Fail2banInput {
  @Field(() => Boolean, { nullable: true })
  enable: boolean;
}
