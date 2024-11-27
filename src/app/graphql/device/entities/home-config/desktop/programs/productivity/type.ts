import { Field, ObjectType } from '@nestjs/graphql';
import { HomeZathura } from './zathura';

@ObjectType()
export class HomeProductivity {
  @Field(() => HomeZathura, { nullable: false })
    zathura: HomeZathura;
}
