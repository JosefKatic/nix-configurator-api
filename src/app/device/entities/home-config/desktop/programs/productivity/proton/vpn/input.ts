import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class HomeProtonVPNInput {
  @Field(() => Boolean, { nullable: true })
  enable: boolean;
}
