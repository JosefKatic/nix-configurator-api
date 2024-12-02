import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Bluetooth {
  @Field(() => Boolean, { nullable: false })
    enable: boolean;

  @Field(() => Boolean, { nullable: false })
    enableManager: boolean;
}
