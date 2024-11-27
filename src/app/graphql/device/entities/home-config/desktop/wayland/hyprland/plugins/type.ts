import { Field, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';
import { HomeHyprSplit } from './hyprsplit';

@ObjectType()
export class HomeHyprlandPlugins {
  @Field(() => HomeHyprSplit, { nullable: false })
    hyprsplit: HomeHyprSplit;
}
