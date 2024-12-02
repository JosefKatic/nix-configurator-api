import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class MosquittoInput {
  @Field(() => Boolean, { nullable: true })
  enable: boolean;
}