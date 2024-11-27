import { Field, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';

@ObjectType()
export class HomeHyprlandSettings {
  @Field(() => String, { nullable: false })
    mod: string; 
}
