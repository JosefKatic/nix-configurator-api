import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class HydraInput {
  @Field(() => Boolean, { nullable: true })
  enable: boolean;
}