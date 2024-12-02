import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UEFIInput {
  @Field(() => Boolean, { nullable: true })
  enable: boolean;

  @Field(() => Boolean, { nullable: true })
  secureboot: boolean;
}
