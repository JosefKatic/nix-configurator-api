import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Fish {
  @Field(() => Boolean, { nullable: false })
    enable: boolean;
}
