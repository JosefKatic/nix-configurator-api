import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class HomeProtonMail {
  @Field(() => Boolean, { nullable: false })
    enable: boolean;
}
