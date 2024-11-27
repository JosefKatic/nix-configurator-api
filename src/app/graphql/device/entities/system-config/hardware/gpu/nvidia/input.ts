import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GpuNvidiaInput {
  @Field(() => Boolean, { nullable: true })
  enable: boolean;
}
