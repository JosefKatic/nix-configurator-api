import { Field, InputType } from '@nestjs/graphql';
import { HomeHyprlandPluginsInput } from './plugins';

@InputType()
export class HomeHyprlandInput {
  @Field(() => Boolean, { nullable: true })
  enable: boolean;

  @Field(() => HomeHyprlandInput, { nullable: true })
  settings: HomeHyprlandInput;

  @Field(() => HomeHyprlandPluginsInput, { nullable: true })
  plugins: HomeHyprlandPluginsInput;
}
