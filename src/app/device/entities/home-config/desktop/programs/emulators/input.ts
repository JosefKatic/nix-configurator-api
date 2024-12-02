import { Field, InputType } from '@nestjs/graphql';
import { HomeAlacrittyInput } from './alacritty';
import { HomeKittyInput } from './kitty';
import { HomeWeztermInput } from './wezterm';

@InputType()
export class HomeEmulatorsInput {
  @Field(() => HomeAlacrittyInput, { nullable: true })
  alacritty: HomeAlacrittyInput;

  @Field(() => HomeKittyInput, { nullable: true })
  kitty: HomeKittyInput;

  @Field(() => HomeWeztermInput, { nullable: true })
  wezterm: HomeWeztermInput;
}
