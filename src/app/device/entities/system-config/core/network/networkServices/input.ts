import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class NetworkServicesInput {
  @Field(() => Boolean, { nullable: true })
  enableNetworkManager: boolean;

  @Field(() => Boolean, { nullable: true })
  enableAvahi: boolean;

  @Field(() => Boolean, { nullable: true })
  enableResolved: boolean;
}
