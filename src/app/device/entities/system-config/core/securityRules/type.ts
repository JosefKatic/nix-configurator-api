import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SecurityRules {
  @Field(() => Boolean, { nullable: false })
    enable: boolean;
}
