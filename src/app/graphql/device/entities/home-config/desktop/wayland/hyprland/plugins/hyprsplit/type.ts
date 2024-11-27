import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';

@ObjectType()
export class HomeHyprSplit {
  @Field(() => Boolean, { nullable: false })
    enable: boolean;

  @Field(() => Int, { nullable: false })
    numberOfWorkspaces: number
}
