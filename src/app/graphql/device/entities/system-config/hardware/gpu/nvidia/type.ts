import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class GpuNvidia {
  @Field(() => Boolean, { nullable: false })
    enable: boolean;
}
