import { Field, ObjectType } from '@nestjs/graphql';
import { HomeZathura } from './zathura';
import { HomeProton } from './proton';

@ObjectType()
export class HomeProductivity {
  @Field(() => HomeProton, { nullable: false })
  proton: HomeProton;

  @Field(() => HomeZathura, { nullable: false })
  zathura: HomeZathura;
}
