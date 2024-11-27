import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Document, Schema as MongooSchema } from 'mongoose';
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

  // @Field(() => SystemConfig, { nullable: true })
  // systemConfig: SystemConfig;

  // @Field(() => HomeConfig, { nullable: true })
  // homeConfig: HomeConfig;
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

export type DeviceDocument = Device & Document;
export const DeviceSchema = SchemaFactory.createForClass(Device);
