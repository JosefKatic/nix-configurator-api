import { Field, InputType } from '@nestjs/graphql';
import { HomeZathuraInput } from './zathura';

@InputType()
export class HomeProductivityInput {
  @Field(() => HomeZathuraInput, { nullable: true })
  zathura: HomeZathuraInput;
}
