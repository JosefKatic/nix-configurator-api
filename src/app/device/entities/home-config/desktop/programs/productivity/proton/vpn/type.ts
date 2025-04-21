import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class HomeProtonVPN {
  @Field(() => Boolean, { nullable: false })
  enable: boolean;
}
