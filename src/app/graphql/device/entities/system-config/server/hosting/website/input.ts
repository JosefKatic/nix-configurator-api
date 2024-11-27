import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class WebsiteInput {
  @Field(() => Boolean, { nullable: true })
  enable: boolean;
}