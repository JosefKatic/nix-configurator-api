
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class NginxInput {
  @Field(() => Boolean, { nullable: true })
  enable: boolean;
}
