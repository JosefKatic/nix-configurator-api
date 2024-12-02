import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class HomeMako {
  @Field(() => Boolean, { nullable: false })
    enable: boolean;
}
