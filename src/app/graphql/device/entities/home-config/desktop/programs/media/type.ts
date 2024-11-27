import { Field, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';
import { HomeMPV } from './mpv';

@ObjectType()
export class HomeMedia {
  @Field(() => HomeMPV, { nullable: false })
    mpv: HomeMPV;
}
