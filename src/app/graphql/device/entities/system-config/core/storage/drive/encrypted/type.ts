import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Encrypted {
  @Field(() => Boolean, { nullable: false })
    enable: boolean;

  @Field(() => String, {
    nullable: false,
    defaultValue: '/dev/disk/by-partlabel/cryptsystem'
  })
    path: string;
}
