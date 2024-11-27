import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CpuIntel {
  @Field(() => Boolean, { nullable: false })
    enable: boolean;
}
