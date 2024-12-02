import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class GDM {
  @Field(() => Boolean, { nullable: false })
    enable: boolean;
}
