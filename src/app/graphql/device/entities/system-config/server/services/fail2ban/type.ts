import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Fail2ban {
  @Field(() => Boolean, { nullable: false })
    enable: boolean;
}
