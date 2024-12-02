import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class HomeBraveInput {
  @Field(() => Boolean, { nullable: true })
  enable: boolean;
}
