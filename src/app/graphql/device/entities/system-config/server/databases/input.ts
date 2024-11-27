import { Field, InputType } from '@nestjs/graphql';
import { PostgresqlInput } from '../databases/postgresql';
import { MysqlInput } from '../databases/mysql';

@InputType()
export class DatabasesInput {
  @Field(() => MysqlInput, { nullable: true })
  mysql: MysqlInput;

  @Field(() => PostgresqlInput, { nullable: true })
  postgresql: PostgresqlInput;
}
