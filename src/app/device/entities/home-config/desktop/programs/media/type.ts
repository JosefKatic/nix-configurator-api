import { Field, ObjectType } from '@nestjs/graphql';
import { HomeMPV } from './mpv';

@ObjectType()
export class HomeMedia {
  @Field(() => HomeMPV, { nullable: false })
    mpv: HomeMPV;
}
