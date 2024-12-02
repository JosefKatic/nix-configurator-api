import { Field, InputType } from '@nestjs/graphql';
import { HomeUdiskieInput } from './udiskie';

@InputType()
export class HomeSystemServicesInput {
  @Field(() => HomeUdiskieInput, { nullable: true })
  udiskie: HomeUdiskieInput;
}
