import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class HomeHyprSplitInput {
  @Field(() => Boolean, { nullable: true })
  enable: boolean;
}
