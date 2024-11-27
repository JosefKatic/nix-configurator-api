import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class FishInput {
  @Field(() => Boolean, { nullable: true })
  enable: boolean;
}
