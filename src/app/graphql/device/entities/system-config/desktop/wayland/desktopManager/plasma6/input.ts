import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class Plasma6Input {
  @Field(() => Boolean, { nullable: true })
  enable: boolean;
}
