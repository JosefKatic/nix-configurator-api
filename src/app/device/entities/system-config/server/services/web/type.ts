import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Nginx } from './nginx';
import { Acme } from './acme';

@ObjectType()
export class Web {
  @Field(() => Acme, { nullable: false })
    acme: Acme;

  @Field(() => Nginx, { nullable: false })
    nginx: Nginx;
}
