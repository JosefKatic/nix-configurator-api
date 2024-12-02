import { Field, ObjectType } from '@nestjs/graphql';
import { Trezor } from './trezor';
import { Yubikey } from './yubikey';
import { Xbox } from './xbox';

@ObjectType()
export class Misc {
  @Field(() => Trezor)
    trezor: Trezor;

  @Field(() => Xbox)
    xbox: Xbox;

  @Field(() => Yubikey)
    yubikey: Yubikey;
}
