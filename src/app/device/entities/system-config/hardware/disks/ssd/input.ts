import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class SSDInput {
  @Field(() => Boolean, { nullable: true })
  enable: boolean;
}
