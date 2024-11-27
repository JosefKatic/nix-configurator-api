import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class HeadscaleInput {
  @Field(() => Boolean, { nullable: true })
  enable: boolean;
}
