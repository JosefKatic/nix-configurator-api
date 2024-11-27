import { Field, InputType } from "@nestjs/graphql";
import { Prop } from "@nestjs/mongoose";
import { WebsiteInput } from "./website";

@InputType()
export class HostingInput {
  @Field(() => WebsiteInput, { nullable: true })
  website: WebsiteInput;
}