import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class HomeLutris {
  @Field(() => Boolean, { nullable: false })
    enable: boolean;
}
