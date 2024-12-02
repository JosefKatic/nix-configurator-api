import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Gnome {
  @Field(() => Boolean, { nullable: false })
    enable: boolean;
}
