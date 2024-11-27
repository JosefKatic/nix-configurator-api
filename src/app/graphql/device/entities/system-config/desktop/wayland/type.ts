import { Field, ObjectType } from '@nestjs/graphql';
import { DesktopManager } from './desktopManager';
import { DisplayManager } from './displayManager';
import { WindowManager } from './windowManager';

@ObjectType()
export class Wayland {
  @Field(() => DesktopManager, { nullable: false })
    desktopManager: DesktopManager;

  @Field(() => DisplayManager, { nullable: false })
    displayManager: DisplayManager;

  @Field(() => WindowManager, { nullable: false })
    windowManager: WindowManager;
}
