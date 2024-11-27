import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class HomeFirefoxInput {
  @Field(() => Boolean, { nullable: true })
  enable: boolean;
}
