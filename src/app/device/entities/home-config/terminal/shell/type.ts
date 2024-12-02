import { Field, ObjectType } from '@nestjs/graphql';
import { HomeFish } from './fish';

@ObjectType()
export class HomeShell {
  @Field(() => HomeFish, { nullable: false })
    fish: HomeFish;
}
