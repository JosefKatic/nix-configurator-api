import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class HomeMakoInput {
  @Field(() => Boolean, { nullable: true })
  enable: boolean;
}
