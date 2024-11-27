import { Field, ObjectType } from '@nestjs/graphql';
import { HomeUdiskie } from './udiskie';

@ObjectType()
export class HomeSystemServices {
  @Field(() => HomeUdiskie, { nullable: false })
    udiskie: HomeUdiskie;
}
