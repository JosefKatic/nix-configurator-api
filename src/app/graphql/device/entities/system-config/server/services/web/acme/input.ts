import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class AcmeInput {
  @Field(() => Boolean, { nullable: true })
  enable: boolean;
}
