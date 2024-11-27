import { Field, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';

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
