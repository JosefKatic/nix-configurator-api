import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { SystemConfig } from './system-config';
import { HomeConfig } from './home-config';

@ObjectType()
// @Schema()
export class Device {
  @Field(() => String)
  hostname: string;

  @Field(() => String)
  ip: string;

  @Field(() => Boolean)
  isOnline: boolean;
}

@ObjectType()
export class DeviceConfig {
  @Field(() => String)
  hostname: string;
  @Field(() => SystemConfig, { nullable: true })
  systemConfig: SystemConfig;
  @Field(() => HomeConfig, { nullable: true })
  homeConfig: HomeConfig;
}
