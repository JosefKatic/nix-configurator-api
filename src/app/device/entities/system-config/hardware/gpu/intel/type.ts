import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class GpuIntel {
  @Field(() => Boolean, { nullable: false })
    enable: boolean;
}
