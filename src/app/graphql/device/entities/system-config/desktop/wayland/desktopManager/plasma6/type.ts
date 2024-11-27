import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Plasma6 {
  @Field(() => Boolean, { nullable: false })
    enable: boolean;
}
