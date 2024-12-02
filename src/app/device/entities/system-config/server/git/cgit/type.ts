import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CGit {
  @Field(() => Boolean, { nullable: false })
    enable: boolean;
}
