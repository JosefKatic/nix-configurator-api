import { Field, ObjectType } from '@nestjs/graphql';
import { HomeHyprSplit } from './hyprsplit';

@ObjectType()
export class HomeHyprlandPlugins {
  @Field(() => HomeHyprSplit, { nullable: false })
    hyprsplit: HomeHyprSplit;
}
