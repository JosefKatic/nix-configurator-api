import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class HomeKdeConnect {
  @Field(() => Boolean, { nullable: false })
    enable: boolean;
}
