import { Field, ObjectType } from '@nestjs/graphql';
import { HomeShell } from './shell';

@ObjectType()
export class HomeTerminal {
  @Field(() => HomeShell, { nullable: true })
  shell: HomeShell;
}
