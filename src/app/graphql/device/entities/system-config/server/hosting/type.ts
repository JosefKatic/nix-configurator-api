import { Field, ObjectType } from "@nestjs/graphql";
import { Prop } from "@nestjs/mongoose";
import { Website } from "./website";

@ObjectType()
export class Hosting {
  @Field(() => Website, { nullable: false })
    website: Website;
}