import { Field, InputType, registerEnumType } from '@nestjs/graphql';
import { BootInput } from './boot';
import { CoreInput } from './core';
import { DesktopInput } from './desktop';
import { HardwareInput } from './hardware';
import { ServerInput } from './server';
import { UtilsInput } from './utils';
import { TypeEnum } from './typeEnum';

@InputType()
export class SystemConfigInput {
  @Field(() => CoreInput, { nullable: true })
  core: CoreInput;

  @Field(() => DesktopInput, { nullable: true })
  desktop: DesktopInput;

  @Field(() => ServerInput, { nullable: true })
  server: ServerInput;

  @Field(() => UtilsInput, { nullable: true })
  utils: UtilsInput;

  build: string;
}
