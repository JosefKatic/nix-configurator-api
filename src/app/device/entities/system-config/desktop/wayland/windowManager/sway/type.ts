import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Sway {
  @Field(() => Boolean, { nullable: false })
    enable: boolean;
}
