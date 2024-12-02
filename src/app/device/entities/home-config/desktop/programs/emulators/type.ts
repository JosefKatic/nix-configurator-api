import { Field, ObjectType } from '@nestjs/graphql';
import { HomeAlacritty } from './alacritty';
import { HomeKitty } from './kitty';
import { HomeWezterm } from './wezterm';

@ObjectType()
export class HomeEmulators {
  @Field(() => HomeAlacritty, { nullable: true })
    alacritty: HomeAlacritty;

  @Field(() => HomeKitty, { nullable: true })
    kitty: HomeKitty;

  @Field(() => HomeWezterm, { nullable: true })
    wezterm: HomeWezterm;
}
