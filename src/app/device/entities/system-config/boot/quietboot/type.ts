import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Quietboot {
  @Field(() => Boolean, { nullable: false })
    enable: boolean;
}
