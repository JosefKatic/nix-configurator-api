import { Field, ObjectType } from '@nestjs/graphql';
import { NetworkServices } from './networkServices';
import { Prop } from '@nestjs/mongoose';

@ObjectType()
export class Network {
  @Field(() => String, { nullable: false })
    domain: string;

  @Field(() => NetworkServices, { nullable: false })
    services: NetworkServices;
}
