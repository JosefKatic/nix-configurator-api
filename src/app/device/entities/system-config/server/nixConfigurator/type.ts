import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class NixConfigurator {
  @Field(() => Boolean, { nullable: false })
  enable: boolean;
}
