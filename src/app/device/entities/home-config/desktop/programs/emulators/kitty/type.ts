import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class HomeKitty {
  @Field(() => Boolean, { nullable: false })
    enable: boolean;
}
