import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class SwayInput {
  @Field(() => Boolean, { nullable: true })
  enable: boolean;
}
