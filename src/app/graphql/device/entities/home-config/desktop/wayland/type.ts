import { Field, ObjectType } from '@nestjs/graphql';
import { HomeHyprland } from './hyprland';
import { HomeWaybar } from './waybar';

@ObjectType()
export class HomeWayland {
  @Field(() => HomeHyprland, { nullable: false })
    hyprland: HomeHyprland;

  @Field(() => HomeWaybar, { nullable: false })
    waybar: HomeWaybar;
}
