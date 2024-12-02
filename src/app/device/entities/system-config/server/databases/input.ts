import { Field, InputType } from '@nestjs/graphql';
import { PostgresqlInput } from './postgresql';
import { MysqlInput } from './mysql';

@InputType()
export class DatabasesInput {
  @Field(() => MysqlInput, { nullable: true })
  mysql: MysqlInput;

  @Field(() => PostgresqlInput, { nullable: true })
  postgresql: PostgresqlInput;
}
