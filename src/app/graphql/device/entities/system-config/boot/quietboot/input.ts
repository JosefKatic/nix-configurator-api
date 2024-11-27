import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class QuietbootInput {
  @Field(() => Boolean)
  enable: boolean;
}
