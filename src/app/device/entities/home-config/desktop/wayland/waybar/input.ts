import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class HomeWaybarInput {
  @Field(() => Boolean, { nullable: true })
  enable: boolean;
}
