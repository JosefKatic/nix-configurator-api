import { Field, ObjectType } from '@nestjs/graphql';
import { HomePlayerctl } from './playerctl';

@ObjectType()
export class HomeMediaServices {
  @Field(() => HomePlayerctl, { nullable: false })
    playerctl: HomePlayerctl;
}
