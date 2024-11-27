import { Field, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';

@ObjectType()
export class Fail2ban {
  @Field(() => Boolean, { nullable: false })
    enable: boolean;
}
