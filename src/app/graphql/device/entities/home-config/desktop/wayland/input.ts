import { Field, InputType } from '@nestjs/graphql';
import { HomeHyprlandInput } from './hyprland';
import { HomeWaybarInput } from './waybar';

@InputType()
export class HomeWaylandInput {
  @Field(() => Boolean, { nullable: true })
  hyprland: HomeHyprlandInput;

  @Field(() => HomeWaybarInput, { nullable: true })
  waybar: HomeWaybarInput;
}
