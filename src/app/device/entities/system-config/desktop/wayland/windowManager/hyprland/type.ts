import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Hyprland {
  @Field(() => Boolean, { nullable: false })
    enable: boolean;
}
