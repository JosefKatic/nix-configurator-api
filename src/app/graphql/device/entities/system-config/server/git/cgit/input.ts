import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CGitInput {
  @Field(() => Boolean, { nullable: true })
  enable: boolean;
}