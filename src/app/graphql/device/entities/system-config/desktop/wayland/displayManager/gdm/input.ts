import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GDMInput {
  @Field(() => Boolean, { nullable: true })
    enable: boolean;
}
