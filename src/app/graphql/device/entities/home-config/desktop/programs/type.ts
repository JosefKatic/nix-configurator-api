import { Field, ObjectType } from '@nestjs/graphql';
import { HomeBrowsers } from './browsers';
import { HomeEditors } from './editors';
import { HomeEmulators } from './emulators';
import { HomeProductivity } from './productivity';
import { HomeGames } from './games';
import { HomeMedia } from './media';

@ObjectType()
export class HomePrograms {
  @Field(() => HomeBrowsers, { nullable: true })
    browsers: HomeBrowsers;

  @Field(() => HomeEditors, { nullable: true })
    editors: HomeEditors;

  @Field(() => HomeEmulators, { nullable: true })
    emulators: HomeEmulators;

  @Field(() => HomeGames, { nullable: true })
    games: HomeGames;

  @Field(() => HomeMedia, { nullable: true })
    media: HomeMedia;

  @Field(() => HomeProductivity, { nullable: true })
    productivity: HomeProductivity;
}
