import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Xbox {
  @Field(() => Boolean, { nullable: false })
    enable: boolean;
}
