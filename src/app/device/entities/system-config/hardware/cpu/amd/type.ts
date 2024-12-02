import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CpuAMD {
  @Field(() => Boolean, { nullable: false })
    enable: boolean;
}
