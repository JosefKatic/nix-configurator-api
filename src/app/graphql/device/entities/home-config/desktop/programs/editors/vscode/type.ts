import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class HomeVSCode {
  @Field(() => Boolean, { nullable: false })
    enable: boolean;
}
