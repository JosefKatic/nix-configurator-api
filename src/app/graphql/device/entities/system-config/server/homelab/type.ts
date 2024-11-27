import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';
import { Blocky } from './blocky';
import { Homeassistant } from './homeassistant';
import { Mosquitto } from './mosquitto';
import { Zigbee2Mqtt } from './zigbee2mqtt';

@ObjectType()
export class Homelab {
  @Field(() => Boolean, { nullable: false })
    enable: boolean;

  @Field(() => Blocky, { nullable: false })
    blocky: Blocky;

  @Field(() => Homeassistant, { nullable: false })
    homeassistant: Homeassistant;

  @Field(() => Mosquitto, { nullable: false })
    mosquitto: Mosquitto;

  @Field(() => Zigbee2Mqtt, { nullable: false })
    zigbee2mqtt: Zigbee2Mqtt;
}
