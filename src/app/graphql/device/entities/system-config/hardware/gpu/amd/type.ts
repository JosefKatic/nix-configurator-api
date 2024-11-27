import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class GpuAMD {
  @Field(() => Boolean, { nullable: false })
    enable: boolean;
}
