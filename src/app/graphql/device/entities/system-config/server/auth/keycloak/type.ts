import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Keycloak {
  @Field(() => Boolean, { nullable: false })
    enable: boolean;
}