import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Minecraft {
  @Field(() => Boolean, { nullable: false })
    enable: boolean;
}
