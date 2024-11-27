import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class HomeChromium {
  @Field(() => Boolean, { nullable: false })
  enable: boolean;
}
