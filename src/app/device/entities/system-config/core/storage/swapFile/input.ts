import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class SwapFileInput {
  @Field(() => Boolean, { nullable: true })
  enable: boolean;

  @Field(() => String, { nullable: true })
  path: string;

  @Field(() => Int, {
    nullable: true,
    description: 'Size in GBs',
  })
  size: number;
}
