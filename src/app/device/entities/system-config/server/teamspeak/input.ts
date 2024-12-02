import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class TeamspeakInput {
  @Field(() => Boolean, { nullable: true })
  enable: boolean;
}
