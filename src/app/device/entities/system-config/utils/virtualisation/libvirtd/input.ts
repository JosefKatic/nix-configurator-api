import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class LibvirtdInput {
  @Field(() => Boolean, { nullable: true })
  enable: boolean;
}
