import { Field, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';
import { HomeZathura } from './zathura';

@ObjectType()
export class HomeProductivity {
  @Field(() => HomeZathura, { nullable: false })
    zathura: HomeZathura;
}
