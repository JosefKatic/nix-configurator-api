import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class HomePlayerctlInput {
  @Field(() => Boolean, { nullable: true })
  enable: boolean;
}
