import { Field, InputType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';

@InputType()
export class GDMInput {
  @Field(() => Boolean, { nullable: true })
    enable: boolean;
}
