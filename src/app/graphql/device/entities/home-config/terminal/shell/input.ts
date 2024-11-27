import { Field, InputType } from '@nestjs/graphql';
import { HomeFishInput } from './fish';

@InputType()
export class HomeShellInput {
  @Field(() => HomeFishInput, { nullable: true })
  fish: HomeFishInput;
}
