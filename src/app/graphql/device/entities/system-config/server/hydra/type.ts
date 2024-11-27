import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Hydra {
  @Field(() => Boolean, { nullable: false })
    enable: boolean;
}
