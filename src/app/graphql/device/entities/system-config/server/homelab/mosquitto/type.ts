import { Field, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';

@ObjectType()
export class Mosquitto {
  @Field(() => Boolean, { nullable: false })
    enable: boolean;
}
