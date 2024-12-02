import { Field, InputType, registerEnumType } from '@nestjs/graphql';
import { HomeBrowsersInput } from './browsers';
import { HomeEditorsInput } from './editors';
import { HomeEmulatorsInput } from './emulators';
import { HomeGamesInput } from './games';
import { HomeMediaInput } from './media';
import { HomeProductivityInput } from './productivity';

@InputType()
export class HomeProgramsInput {
  @Field(() => HomeBrowsersInput, { nullable: true })
  browsers: HomeBrowsersInput;

  @Field(() => HomeEditorsInput, { nullable: true })
  editors: HomeEditorsInput;

  @Field(() => HomeEmulatorsInput, { nullable: true })
  emulators: HomeEmulatorsInput;

  @Field(() => HomeGamesInput, { nullable: true })
  games: HomeGamesInput;

  @Field(() => HomeMediaInput, { nullable: true })
  media: HomeMediaInput;

  @Field(() => HomeProductivityInput, { nullable: true })
  productivity: HomeProductivityInput;
}
