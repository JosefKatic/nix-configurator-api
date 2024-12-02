import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class HomeZathuraInput {
  @Field(() => Boolean, { nullable: true })
  enable: boolean;
}
