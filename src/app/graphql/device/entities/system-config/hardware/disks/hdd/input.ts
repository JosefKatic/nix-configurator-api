import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class HDDInput {
  @Field(() => Boolean, { nullable: true })
  enable: boolean;
}
