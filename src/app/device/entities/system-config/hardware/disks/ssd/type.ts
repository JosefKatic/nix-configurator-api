import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SSD {
  @Field(() => Boolean, { nullable: false })
    enable: boolean;
}
