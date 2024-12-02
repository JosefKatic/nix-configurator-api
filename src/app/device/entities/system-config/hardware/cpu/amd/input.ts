import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CpuAMDInput {
  @Field(() => Boolean, { nullable: true  })
  enable: boolean;
}
