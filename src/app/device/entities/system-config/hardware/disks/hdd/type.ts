import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class HDD {
  @Field(() => Boolean, { nullable: false })
    enable: boolean;
}
