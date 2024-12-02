import { Field, ObjectType } from '@nestjs/graphql';
import { Gnome } from './gnome';
import { Plasma6 } from './plasma6';

@ObjectType()
export class DesktopManager {
  @Field(() => Gnome, { nullable: false })
    gnome: Gnome;

  @Field(() => Plasma6, { nullable: false })
    plasma6: Plasma6;
}
