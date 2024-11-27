import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class HomeWezterm {
  @Field(() => Boolean, { nullable: false })
    enable: boolean;
}
