import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class GitDaemonInput {
  @Field(() => Boolean, { nullable: true })
  enable: boolean;
}