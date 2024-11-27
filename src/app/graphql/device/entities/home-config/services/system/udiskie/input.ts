import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class HomeUdiskieInput {
  @Field(() => Boolean, { nullable: true })
  enable: boolean;
}
