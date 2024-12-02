import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class HyprlandInput {
  @Field(() => Boolean, { nullable: true })
  enable: boolean;
}
