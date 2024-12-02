import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Docker {
  @Field(() => Boolean, { nullable: false })
    enable: boolean;
}
