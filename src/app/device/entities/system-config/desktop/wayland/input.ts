import { Field, InputType } from '@nestjs/graphql';
import { DesktopManagerInput } from './desktopManager';
import { DisplayManagerInput } from './displayManager';
import { WindowManagerInput } from './windowManager';

@InputType()
export class WaylandInput {
  @Field(() => DesktopManagerInput, { nullable: true })
  desktopManager: DesktopManagerInput;

  @Field(() => DisplayManagerInput, { nullable: true })
  displayManager: DisplayManagerInput;

  @Field(() => WindowManagerInput, { nullable: true })
  windowManager: WindowManagerInput;
}
