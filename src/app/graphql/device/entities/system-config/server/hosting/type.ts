import { Field, ObjectType } from "@nestjs/graphql";
import { Website } from "./website";

@ObjectType()
export class Hosting {
  @Field(() => Website, { nullable: false })
    website: Website;
}