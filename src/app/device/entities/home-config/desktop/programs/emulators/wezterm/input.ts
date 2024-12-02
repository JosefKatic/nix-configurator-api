import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class HomeWeztermInput {
  @Field(() => Boolean, { nullable: true })
  enable: boolean;
}
