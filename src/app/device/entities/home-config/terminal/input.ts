import { Field, InputType, registerEnumType } from '@nestjs/graphql';
import { HomeShellInput } from './shell';

@InputType()
export class HomeTerminalInput {
  @Field(() => HomeShellInput, { nullable: true })
  shell: HomeShellInput;
}
