import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class HomeFishInput {
  @Field(() => Boolean, { nullable: true })
  enable: boolean;
}
