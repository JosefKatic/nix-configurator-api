import { Field, ObjectType } from '@nestjs/graphql';
import { Hyprland } from './hyprland';
import { Sway } from './sway';

@ObjectType()
export class WindowManager {
  @Field(() => Hyprland)
    hyprland: Hyprland;

  @Field(() => Sway)
    sway: Sway;
}
