import { Field, InputType } from "@nestjs/graphql";
import { Fail2banInput } from "./fail2ban";
import { HeadscaleInput } from "./headscale";
import { WebInput } from "./web";

@InputType()
export class ServicesInput {
  @Field(() => Fail2banInput, { nullable: true })
  fail2ban: Fail2banInput;

  @Field(() => HeadscaleInput, { nullable: true })
  headscale: HeadscaleInput;

  @Field(() => WebInput, { nullable: true })
  web: WebInput;
}