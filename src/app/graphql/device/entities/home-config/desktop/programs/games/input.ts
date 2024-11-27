import { Field, InputType } from '@nestjs/graphql';
import { HomeMinecraftInput } from './minecraft';
import { HomeLutrisInput } from './lutris';

@InputType()
export class HomeGamesInput {
  @Field(() => HomeMinecraftInput, { nullable: true })
  minecraft: HomeMinecraftInput;

  @Field(() => HomeLutrisInput, { nullable: true })
  lutris: HomeLutrisInput;
}
