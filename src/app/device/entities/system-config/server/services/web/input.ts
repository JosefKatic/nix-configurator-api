import { Field, InputType } from '@nestjs/graphql';
import { NginxInput } from './nginx';
import { AcmeInput } from './acme';

@InputType()
export class WebInput {
  @Field(() => AcmeInput, { nullable: true })
  acme: AcmeInput;

  @Field(() => NginxInput, { nullable: true })
  nginx: NginxInput;
}
