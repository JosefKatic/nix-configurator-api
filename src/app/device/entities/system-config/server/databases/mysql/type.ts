import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Mysql {
  @Field(() => Boolean, { nullable: false })
    enable: boolean;
}
