import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Acme {
  @Field(() => Boolean, { nullable: false })
    enable: boolean;
}
