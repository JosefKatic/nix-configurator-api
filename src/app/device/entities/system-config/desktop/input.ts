import { Field, InputType } from '@nestjs/graphql';
import { GamemodeInput } from './gamemode';
import { WaylandInput } from './wayland';

@InputType()
export class DesktopInput {
  @Field(() => GamemodeInput, { nullable: true })
  gamemode: GamemodeInput;

  @Field(() => WaylandInput, { nullable: true })
  wayland: WaylandInput;
}
