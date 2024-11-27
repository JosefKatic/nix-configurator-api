import { Field, InputType } from '@nestjs/graphql';
import { TrezorInput } from './trezor';
import { YubikeyInput } from './yubikey';
import { XboxInput } from './xbox';

@InputType()
export class MiscInput {
  @Field(() => TrezorInput)
  trezor: TrezorInput;

  @Field(() => XboxInput)
  xbox: XboxInput;

  @Field(() => YubikeyInput)
  yubikey: YubikeyInput;
}
