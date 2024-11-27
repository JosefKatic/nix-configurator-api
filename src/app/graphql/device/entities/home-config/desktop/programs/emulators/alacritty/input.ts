import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class HomeAlacrittyInput {
  @Field(() => Boolean, { nullable: true })
  enable: boolean;
}
