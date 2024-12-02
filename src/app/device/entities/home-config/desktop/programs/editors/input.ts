import { Field, InputType } from '@nestjs/graphql';
import { HomeVSCodeInput } from './vscode';

@InputType()
export class HomeEditorsInput {
  @Field(() => HomeVSCodeInput, { nullable: true })
  vscode: HomeVSCodeInput;
}
