import { Field, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';
import { Encrypted } from './encrypted';

@ObjectType()
export class Drive {
  @Field(() => String, { nullable: false })
    name: string;

  @Field(() => String, { nullable: false })
    path: string;

  @Field(() => Encrypted, {
    nullable: false,
    defaultValue: { enable: false, path: '/dev/disk/by-partlabel/cryptsystem' }
  })
    encrypted: Encrypted;
}
