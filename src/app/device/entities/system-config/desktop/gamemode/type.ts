import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Gamemode {
  @Field(() => Boolean, { nullable: false })
    enable: boolean;
}
