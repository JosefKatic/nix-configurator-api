import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class HomeChromiumInput {
  @Field(() => Boolean, { nullable: true })
  enable: boolean;
}
