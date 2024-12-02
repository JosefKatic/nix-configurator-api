import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Homeassistant {
  @Field(() => Boolean, { nullable: false })
    enable: boolean;
}
