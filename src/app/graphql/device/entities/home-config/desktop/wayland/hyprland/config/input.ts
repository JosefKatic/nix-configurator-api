import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class HomeHyprlandSettingsInput {
  @Field(() => String, { nullable: true })
  mod: string;
}
