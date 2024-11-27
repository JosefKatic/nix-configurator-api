import { Field, ObjectType } from '@nestjs/graphql';
import { HomeHyprlandSettings } from './config';
import { HomeHyprlandPlugins } from './plugins';

@ObjectType()
export class HomeHyprland {
  @Field(() => Boolean, { nullable: false })
    enable: boolean;

  @Field(() => HomeHyprlandSettings, { nullable: false })
    settings: HomeHyprland;


  @Field(() => HomeHyprlandPlugins, { nullable: false })
    plugins: HomeHyprlandPlugins;
}
