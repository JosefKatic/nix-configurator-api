import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class FreeIPAInput{
  @Field(() => Boolean, { nullable: true })
  enable: boolean;
}
