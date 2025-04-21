import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class HomeProtonPassInput {
  @Field(() => Boolean, { nullable: true })
  enable: boolean;
}
