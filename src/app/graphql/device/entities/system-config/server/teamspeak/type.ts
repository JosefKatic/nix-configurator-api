import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Teamspeak {
  @Field(() => Boolean, { nullable: false })
    enable: boolean;
}
