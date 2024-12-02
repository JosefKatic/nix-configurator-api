import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class MinecraftInput {
  @Field(() => Boolean, { nullable: true })
  enable: boolean;
}