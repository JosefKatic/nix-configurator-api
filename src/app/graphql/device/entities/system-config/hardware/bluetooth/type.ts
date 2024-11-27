import { Field, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';

@ObjectType()
export class Bluetooth {
  @Field(() => Boolean, { nullable: false })
    enable: boolean;

  @Field(() => Boolean, { nullable: false })
    enableManager: boolean;
}
