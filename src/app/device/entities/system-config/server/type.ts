import { Field, ObjectType } from '@nestjs/graphql';
import { Auth } from './auth';
import { Cache } from './cache';
import { Databases } from './databases';
import { GitServer } from './git';
import { Services } from './services';
import { Teamspeak } from './teamspeak';
import { Hydra } from './hydra';
import { Minecraft } from './minecraft';
import { Hosting } from './hosting';
import { NixConfigurator } from './nixConfigurator';

@ObjectType()
export class Server {
  @Field(() => Auth, { nullable: false })
  auth: Auth;

  @Field(() => Cache, { nullable: false })
  cache: Cache;

  @Field(() => Databases, { nullable: false })
  databases: Databases;

  @Field(() => GitServer, { nullable: false })
  git: GitServer;

  @Field(() => Hosting, { nullable: false })
  hosting: Hosting;

  @Field(() => Hydra, { nullable: false })
  hydra: Hydra;

  @Field(() => Minecraft, { nullable: false })
  minecraft: Hydra;

  @Field(() => NixConfigurator, { nullable: false })
  nixConfigurator: NixConfigurator;

  @Field(() => Services, { nullable: false })
  services: Services;

  @Field(() => Teamspeak, { nullable: false })
  teamspeak: Teamspeak;
}
