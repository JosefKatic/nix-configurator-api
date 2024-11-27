import { Field, ObjectType } from '@nestjs/graphql';
import { GDM } from './gdm';

@ObjectType()
export class DisplayManager {
  @Field(() => GDM)
    gdm: GDM;
}
