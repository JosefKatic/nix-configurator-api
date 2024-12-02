import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ZshInput {
  @Field(() => Boolean, { nullable: true })
  enable: boolean;
}
