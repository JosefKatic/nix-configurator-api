import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class XboxInput {
  @Field(() => Boolean, { nullable: true })
    enable: boolean;
}
