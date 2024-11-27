import { Field, ObjectType } from "@nestjs/graphql";
import { Prop } from "@nestjs/mongoose";
import { Fail2ban } from "./fail2ban";
import { Headscale } from "./headscale";
import { Web } from "./web";

@ObjectType()
export class Services {
  @Field(() => Fail2ban, { nullable: false })
    fail2ban: Fail2ban;

  @Field(() => Headscale, { nullable: false })
    headscale: Headscale;

  @Field(() => Web, { nullable: false })
    web: Web;
}