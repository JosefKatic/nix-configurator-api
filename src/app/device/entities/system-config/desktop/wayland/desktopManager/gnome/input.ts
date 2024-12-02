import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GnomeInput {
  @Field(() => Boolean, { nullable: true })
  enable: boolean;
}
