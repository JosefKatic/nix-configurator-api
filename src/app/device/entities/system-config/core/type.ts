import { Field, ObjectType } from '@nestjs/graphql';

import { Locale } from './locale';
import { Network } from './network';
import { SecurityRules } from './securityRules';
import { Shells } from './shells';

@ObjectType()
export class Core {
  @Field(() => String, { nullable: false })
  kernel: string;

  @Field(() => Boolean, { nullable: false })
  disableDefaults: boolean;

  @Field(() => Locale, { nullable: false })
  locale: Locale;

  @Field(() => Network, { nullable: false })
  network: Network;

  @Field(() => SecurityRules, { nullable: false })
  securityRules: SecurityRules;

  @Field(() => Shells, { nullable: false })
  shells: Shells;
}
