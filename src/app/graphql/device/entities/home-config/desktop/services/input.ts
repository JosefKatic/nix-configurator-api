import { Field, InputType } from '@nestjs/graphql';
import { HomeKdeConnectInput } from './kdeconnect';
import { HomeMakoInput } from './mako';
import { HomePolkitAgentInput } from './polkit-agent';

@InputType()
export class HomeDesktopServicesInput {
  @Field(() => HomeKdeConnectInput, { nullable: true })
  kdeconnect: HomeKdeConnectInput;

  @Field(() => HomeMakoInput, { nullable: true })
  mako: HomeMakoInput;

  @Field(() => HomePolkitAgentInput, { nullable: true })
  polkit_agent: HomePolkitAgentInput;
}
