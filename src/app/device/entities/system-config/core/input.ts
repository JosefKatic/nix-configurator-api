import { Field, InputType } from '@nestjs/graphql';

import { LocaleInput } from './locale';
import { NetworkInput } from './network';
import { SecurityRulesInput } from './securityRules';
import { ShellsInput } from './shells';
import { StorageInput } from './storage';

@InputType()
export class CoreInput {

  @Field(() => String, { nullable: true })
  kernel: string;

  @Field(() => Boolean, { nullable: true })
  disableDefaults: boolean;

  @Field(() => LocaleInput, { nullable: true })
  locale: LocaleInput;

  @Field(() => NetworkInput, { nullable: true })
  network: NetworkInput;

  @Field(() => SecurityRulesInput, { nullable: true })
  securityRules: SecurityRulesInput;

  @Field(() => ShellsInput, { nullable: true })
  shells: ShellsInput;

  @Field(() => StorageInput, { nullable: true })
  storage: StorageInput;
}
