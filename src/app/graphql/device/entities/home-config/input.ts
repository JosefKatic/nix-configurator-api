import { Field, InputType, registerEnumType } from '@nestjs/graphql';
import { HomeDesktopInput } from './desktop';
import { HomeServicesInput } from './services';
import { HomeTerminalInput } from './terminal';

@InputType()
export class HomeConfigInput {
  @Field(() => HomeDesktopInput, { nullable: true })
  desktop: HomeDesktopInput;

  @Field(() => HomeServicesInput, { nullable: true })
  services: HomeServicesInput;

  @Field(() => HomeTerminalInput, { nullable: true })
  terminal: HomeTerminalInput;

  build: string;
}
