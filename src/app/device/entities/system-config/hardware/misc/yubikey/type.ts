import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Yubikey {
  @Field(() => Boolean, { nullable: false })
    enable: boolean;
}
