import { Field, ObjectType } from '@nestjs/graphql';
import { Postgresql } from './postgresql';
import { Mysql } from './mysql';

@ObjectType()
export class Databases {
  @Field(() => Mysql, { nullable: false })
    mysql: Mysql;
  @Field(() => Postgresql, { nullable: false })
    postgresql: Postgresql;
}
