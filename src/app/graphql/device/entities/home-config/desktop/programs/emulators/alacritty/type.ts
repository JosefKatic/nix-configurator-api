import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class HomeAlacritty {
  @Field(() => Boolean, { nullable: false })
    enable: boolean;
}
