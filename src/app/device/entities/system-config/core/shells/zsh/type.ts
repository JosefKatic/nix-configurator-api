import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Zsh {
  @Field(() => Boolean, { nullable: false })
    enable: boolean;
}
