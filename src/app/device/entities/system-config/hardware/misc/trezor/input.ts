import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class TrezorInput {
  @Field(() => Boolean, { nullable: true })
  enable: boolean;
}
