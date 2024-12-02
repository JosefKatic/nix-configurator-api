import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class HomeMinecraft {
  @Field(() => Boolean, { nullable: false })
    enable: boolean;
}
