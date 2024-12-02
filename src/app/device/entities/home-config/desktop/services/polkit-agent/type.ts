import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class HomePolkitAgent {
  @Field(() => Boolean, { nullable: false })
    enable: boolean;
}
