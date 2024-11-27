import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Headscale {
  @Field(() => Boolean, { nullable: false })
    enable: boolean;
}
