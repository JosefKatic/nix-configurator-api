import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class HomeKittyInput {
  @Field(() => Boolean, { nullable: true })
  enable: boolean;
}
