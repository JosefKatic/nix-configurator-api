import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UEFI {
  @Field(() => Boolean, { nullable: false })
    enable: boolean;

  @Field(() => Boolean, { nullable: false })
    secureboot: boolean;
}
