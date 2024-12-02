import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class HomeMPV {
  @Field(() => Boolean, { nullable: false })
    enable: boolean;
}
