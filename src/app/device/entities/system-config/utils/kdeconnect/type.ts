import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class KdeConnect {
  @Field(() => Boolean, { nullable: false })
    enable: boolean;
}
