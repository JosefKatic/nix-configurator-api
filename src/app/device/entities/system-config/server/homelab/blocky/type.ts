import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Blocky {
  @Field(() => Boolean, { nullable: false })
    enable: boolean;
}
