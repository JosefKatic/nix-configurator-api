import { Field, InputType } from '@nestjs/graphql';
import { HomePlayerctlInput } from './playerctl';

@InputType()
export class HomeMediaServicesInput {
  @Field(() => HomePlayerctlInput, { nullable: true })
  playerctl: HomePlayerctlInput;
}
