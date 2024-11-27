import { Field, InputType } from '@nestjs/graphql';
import { HomeHyprlandInput } from './wayland/hyprland';
import { HomeWaybarInput } from './wayland/waybar';
import { HomeProgramsInput } from './programs';
import { HomeServicesInput } from '../services';
import { HomeWaylandInput } from './wayland';

@InputType()
export class HomeDesktopInput {
  @Field(() => HomeProgramsInput, { nullable: true })
  programs: HomeProgramsInput;

  @Field(() => HomeServicesInput, { nullable: true })
  services: HomeServicesInput;

  @Field(() => HomeWaylandInput, { nullable: true })
  wayland: HomeWaylandInput;
}
