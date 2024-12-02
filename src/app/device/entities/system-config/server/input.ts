import { Field, InputType } from '@nestjs/graphql';
import { AuthInput } from './auth';
import { CacheInput } from './cache';
import { ServicesInput } from './services';
import { TeamspeakInput } from './teamspeak';
import { MinecraftInput } from './minecraft';
import { HydraInput } from './hydra';
import { HostingInput } from './hosting';
import { HomelabInput } from './homelab';
import { GitServerInput } from './git';
import { DatabasesInput } from './databases';

@InputType()
export class ServerInput {
  @Field(() => AuthInput, { nullable: true })
  auth: AuthInput;

  @Field(() => CacheInput, { nullable: true })
  cache: CacheInput;

  @Field(() => DatabasesInput, { nullable: true })
  databases: DatabasesInput;

  @Field(() => GitServerInput, { nullable: true })
  git: GitServerInput;

  @Field(() => HomelabInput, { nullable: true })
  homelab: HomelabInput;

  @Field(() => HostingInput, { nullable: true })
  hosting: HostingInput;

  @Field(() => HydraInput, { nullable: true })
  hydra: HydraInput;

  @Field(() => MinecraftInput, { nullable: true })
  minecraft: MinecraftInput;

  @Field(() => ServicesInput, { nullable: true })
  services: ServicesInput;

  @Field(() => TeamspeakInput, { nullable: true })
  teamspeak: TeamspeakInput;
}
