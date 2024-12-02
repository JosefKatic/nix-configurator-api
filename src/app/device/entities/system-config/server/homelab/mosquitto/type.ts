import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Mosquitto {
  @Field(() => Boolean, { nullable: false })
    enable: boolean;
}
