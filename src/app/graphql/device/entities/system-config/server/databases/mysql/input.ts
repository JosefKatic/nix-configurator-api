import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class MysqlInput {
  @Field(() => Boolean, { nullable: true })
  enable: boolean;
}
