import { Field, InputType } from '@nestjs/graphql';
import { HomeMediaInput } from '../desktop/programs/media';

@InputType()
export class HomeServicesInput {
  @Field(() => HomeMediaInput, { nullable: true })
  media: HomeMediaInput;
}
