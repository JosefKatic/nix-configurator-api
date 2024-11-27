import { Field, InputType } from '@nestjs/graphql';
import { PostgresqlInput } from '../databases/postgresql';
import { MysqlInput } from '../databases/mysql';

@InputType()
export class CacheInput {
  @Field(() => Boolean, { nullable: true })
  enable: boolean;
}
