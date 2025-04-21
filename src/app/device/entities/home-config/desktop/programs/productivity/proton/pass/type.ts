import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class HomeProtonPass {
  @Field(() => Boolean, { nullable: false })
    enable: boolean;
}
