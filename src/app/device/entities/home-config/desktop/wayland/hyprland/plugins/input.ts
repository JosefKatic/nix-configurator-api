import { Field, InputType } from '@nestjs/graphql';
import { HomeHyprSplitInput } from './hyprsplit';

@InputType()
export class HomeHyprlandPluginsInput {
  @Field(() => HomeHyprSplitInput, { nullable: true })
  hyprsplit: HomeHyprSplitInput;
}
