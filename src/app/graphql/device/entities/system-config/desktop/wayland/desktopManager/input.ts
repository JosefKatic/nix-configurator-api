import { Field, InputType } from '@nestjs/graphql';
import { GnomeInput } from './gnome';
import { Plasma6Input } from './plasma6';

@InputType()
export class DesktopManagerInput {
  @Field(() => GnomeInput, { nullable: true })
  gnome: GnomeInput;

  @Field(() => Plasma6Input, { nullable: true })
  plasma6: Plasma6Input;
}
