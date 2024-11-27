import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Trezor {
  @Field(() => Boolean, { nullable: false })
    enable: boolean;
}
