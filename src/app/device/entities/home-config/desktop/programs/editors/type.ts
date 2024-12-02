import { Field, ObjectType } from '@nestjs/graphql';
import { HomeVSCode } from './vscode';

@ObjectType()
export class HomeEditors {
  @Field(() => HomeVSCode, { nullable: false })
    vscode: HomeVSCode;
}
