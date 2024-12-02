import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class KeycloakInput {
  @Field(() => Boolean, { nullable: true })
  enable: boolean;
}
