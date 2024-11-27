import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class YubikeyInput {
  @Field(() => Boolean, { nullable: true })
  enable: boolean;
}
