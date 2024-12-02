import { Field, ObjectType } from '@nestjs/graphql';
import { HomeDesktop } from './desktop';
import { HomeServices } from './services';
import { HomeTerminal } from './terminal';

@ObjectType()
export class HomeConfig {
  @Field(() => HomeDesktop, { nullable: true })
  desktop: HomeDesktop;

  @Field(() => HomeServices, { nullable: true })
  services: HomeServices;

  @Field(() => HomeTerminal, { nullable: true })
  terminal: HomeTerminal;
  
  build: string;
}
