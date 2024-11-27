import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Website {
  @Field(() => Boolean, { nullable: false })
    enable: boolean;
}
