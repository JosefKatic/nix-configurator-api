import { Field, ObjectType } from '@nestjs/graphql';
import { HomeMinecraft } from './minecraft';
import { HomeLutris } from './lutris';

@ObjectType()
export class HomeGames {
  @Field(() => HomeMinecraft, { nullable: false })
    minecraft: HomeMinecraft;

  @Field(() => HomeLutris, { nullable: false })
    lutris: HomeLutris;
}
