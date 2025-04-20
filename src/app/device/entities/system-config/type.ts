import { Field, ObjectType } from '@nestjs/graphql';
import { Core } from './core';
import { Desktop } from './desktop';
import { Server } from './server';
import { Utils } from './utils';
import { TypeEnum } from './typeEnum';

@ObjectType()
export class SystemConfig {
  @Field(() => Core, { nullable: false })
  core: Core;

  @Field(() => Desktop, { nullable: false })
  desktop: Desktop;

  @Field(() => Server, { nullable: false })
  server: Server;

  @Field(() => Utils, { nullable: false })
  utils: Utils;

  @Field(() => String, { nullable: false })
  build: string;
}
