import { Field, InputType } from "@nestjs/graphql";
import { VirtualisationInput } from "./virtualisation";
import { KdeConnectInput } from "./kdeconnect";

@InputType()
export class UtilsInput {
  @Field(() => KdeConnectInput)
  kdeconnect: KdeConnectInput;
  
  @Field(() => VirtualisationInput)
  virtualisation: VirtualisationInput;
}