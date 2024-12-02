import { Field, InputType } from '@nestjs/graphql';
import { HomeMPVInput } from './mpv';

@InputType()
export class HomeMediaInput {
  @Field(() => HomeMPVInput, { nullable: true })
  mpv: HomeMPVInput;
}
