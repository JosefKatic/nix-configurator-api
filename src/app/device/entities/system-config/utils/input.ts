import { Field, InputType } from '@nestjs/graphql';
import { VirtualisationInput } from './virtualisation';
import { KdeConnectInput } from './kdeconnect';

@InputType()
export class UtilsInput {
  @Field(() => KdeConnectInput, { nullable: true })
  kdeconnect: KdeConnectInput;

  @Field(() => VirtualisationInput, { nullable: true })
  virtualisation: VirtualisationInput;
}
