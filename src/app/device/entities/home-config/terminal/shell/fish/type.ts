import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class HomeFish {
  @Field(() => Boolean, { nullable: false })
    enable: boolean;
}
