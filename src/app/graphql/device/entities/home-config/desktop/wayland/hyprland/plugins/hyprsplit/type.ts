import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class HomeHyprSplit {
  @Field(() => Boolean, { nullable: false })
    enable: boolean;

  @Field(() => Int, { nullable: false })
    numberOfWorkspaces: number
}
