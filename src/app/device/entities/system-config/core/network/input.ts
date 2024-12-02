import { Field, InputType } from '@nestjs/graphql';
import { NetworkServicesInput } from './networkServices';

@InputType()
export class NetworkInput {
  @Field(() => String, { nullable: true })
  domain: string;

  @Field(() => NetworkServicesInput, { nullable: true })
  services: NetworkServicesInput;
}
