import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class HomeBrave {
  @Field(() => Boolean, { nullable: false })
    enable: boolean;
}
