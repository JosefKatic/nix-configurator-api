import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SwapFile {
  @Field(() => Boolean, { nullable: false })
    enable: boolean;

  @Field(() => String, { nullable: false })
    path: string;

  @Field(() => Int, {
    nullable: false,
    description: 'Size in GBs',
  })
    size: number;
}
