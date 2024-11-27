import { Field, InputType } from '@nestjs/graphql';
import { HyprlandInput } from './hyprland';
import { SwayInput } from './sway';

@InputType()
export class WindowManagerInput {
  @Field(() => HyprlandInput, { nullable: true })
  hyprland: HyprlandInput;

  @Field(() => SwayInput, { nullable: true })
  sway: SwayInput;
}
