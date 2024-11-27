import { Field, InputType } from '@nestjs/graphql';
import { FishInput } from './fish';
import { ZshInput } from './zsh';

@InputType()
export class ShellsInput {
  @Field(() => FishInput, { nullable: true })
  fish: FishInput;

  @Field(() => ZshInput, { nullable: true })
  zsh: ZshInput;
}
