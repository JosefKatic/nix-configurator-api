import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class NixConfiguratorInput {
  @Field(() => Boolean, { nullable: true })
  enable: boolean;
}
