import { Field, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';
import { HomeWayland } from './wayland';
import { HomeDesktopServices } from './services';
import { HomePrograms } from './programs';

@ObjectType()
export class HomeDesktop {
  @Field(() => HomePrograms, { nullable: false })
    programs: HomePrograms;

  @Field(() => HomeDesktopServices, { nullable: false })
    services: HomeDesktopServices;

  @Field(() => HomeWayland, { nullable: true })
  wayland: HomeWayland;
}
