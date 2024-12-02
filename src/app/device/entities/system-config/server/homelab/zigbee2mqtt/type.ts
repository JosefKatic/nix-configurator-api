import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Zigbee2Mqtt {
  @Field(() => Boolean, { nullable: false })
    enable: boolean;
}
