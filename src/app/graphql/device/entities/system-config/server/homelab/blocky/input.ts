import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class BlockyInput {
  @Field(() => Boolean, { nullable: true })
  enable: boolean;
}