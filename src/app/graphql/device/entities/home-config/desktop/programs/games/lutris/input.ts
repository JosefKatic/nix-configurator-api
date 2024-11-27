import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class HomeLutrisInput {
  @Field(() => Boolean, { nullable: true })
  enable: boolean;
}
