import { Field, InputType } from '@nestjs/graphql';
import { GDMInput } from './gdm';

@InputType()
export class DisplayManagerInput {
  @Field(() => GDMInput)
  gdm: GDMInput;
}
