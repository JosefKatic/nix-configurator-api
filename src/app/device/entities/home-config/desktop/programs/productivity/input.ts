import { Field, InputType } from '@nestjs/graphql';
import { HomeZathuraInput } from './zathura';
import { HomeProtonInput } from './proton';

@InputType()
export class HomeProductivityInput {
  @Field(() => HomeProtonInput, { nullable: true })
  proton: HomeProtonInput;

  @Field(() => HomeZathuraInput, { nullable: true })
  zathura: HomeZathuraInput;
}
