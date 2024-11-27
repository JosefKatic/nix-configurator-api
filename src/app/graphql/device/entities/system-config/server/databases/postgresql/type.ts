import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Postgresql {
  @Field(() => Boolean, { nullable: false })
    enable: boolean;
}
