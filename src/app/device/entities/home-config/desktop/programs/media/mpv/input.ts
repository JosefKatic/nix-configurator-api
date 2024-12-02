import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class HomeMPVInput {
  @Field(() => Boolean, { nullable: true })
  enable: boolean;
}
