import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class PodmanInput {
  @Field(() => Boolean, { nullable: true })
  enable: boolean;
}
