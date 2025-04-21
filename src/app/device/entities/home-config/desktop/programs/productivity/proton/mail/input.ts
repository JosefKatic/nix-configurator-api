import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class HomeProtonMailInput {
  @Field(() => Boolean, { nullable: true })
  enable: boolean;
}
