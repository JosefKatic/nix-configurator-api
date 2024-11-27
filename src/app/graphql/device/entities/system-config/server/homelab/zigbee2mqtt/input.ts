import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class Zigbee2MqttInput {
  @Field(() => Boolean, { nullable: true })
  enable: boolean;
}