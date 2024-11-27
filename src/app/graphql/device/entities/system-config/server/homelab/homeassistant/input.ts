import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class HomeassistantInput {
  @Field(() => Boolean, { nullable: true })
  enable: boolean;
}