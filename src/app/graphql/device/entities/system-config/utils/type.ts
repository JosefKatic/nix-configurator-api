import { Field, ObjectType } from '@nestjs/graphql';
import { Virtualisation } from './virtualisation';
import { KdeConnect } from './kdeconnect';

@ObjectType()
export class Utils {
  @Field(() => KdeConnect, { nullable: false })
    kdeconnect: KdeConnect;

  @Field(() => Virtualisation, { nullable: false })
    virtualisation: Virtualisation;
}
