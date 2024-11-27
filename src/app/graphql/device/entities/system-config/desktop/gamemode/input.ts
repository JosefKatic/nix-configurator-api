import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GamemodeInput {
  @Field(() => Boolean, { nullable: true })
  enable: boolean;
}
