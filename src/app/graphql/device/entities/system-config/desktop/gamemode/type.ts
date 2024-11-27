import { Field, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';

@ObjectType()
export class Gamemode {
  @Field(() => Boolean, { nullable: false })
    enable: boolean;
}
