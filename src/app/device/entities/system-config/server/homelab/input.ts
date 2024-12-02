import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { BlockyInput } from './blocky';
import { HomeassistantInput } from './homeassistant';
import { MosquittoInput } from './mosquitto';
import { Zigbee2Mqtt, Zigbee2MqttInput } from './zigbee2mqtt';

@InputType()
export class HomelabInput {
  @Field(() => Boolean, { nullable: true })
  enable: boolean;
  
  @Field(() => BlockyInput, { nullable: true })
  blocky: BlockyInput;

  @Field(() => HomeassistantInput, { nullable: true })
  homeassistant: HomeassistantInput;

  @Field(() => MosquittoInput, { nullable: true })
  mosquitto: MosquittoInput;

  @Field(() => Zigbee2MqttInput, { nullable: true })
  zigbee2mqtt: Zigbee2MqttInput;
}
