import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Podman {
  @Field(() => Boolean, { nullable: false })
    enable: boolean;
}
