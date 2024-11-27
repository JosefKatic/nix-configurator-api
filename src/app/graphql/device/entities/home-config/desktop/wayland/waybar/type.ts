import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class HomeWaybar {
  @Field(() => Boolean, { nullable: false })
    enable: boolean;
}
