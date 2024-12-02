import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class HomeFirefox {
  @Field(() => Boolean, { nullable: false })
    enable: boolean;
}
