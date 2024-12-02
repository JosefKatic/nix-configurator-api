import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class HomeVSCodeInput {
  @Field(() => Boolean, { nullable: true })
  enable: boolean;
}
