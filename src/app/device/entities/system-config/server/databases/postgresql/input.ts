import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class PostgresqlInput {
  @Field(() => Boolean, { nullable: true })
  enable: boolean;
}
