import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { GitDaemonInput } from './daemon';
import { CGitInput } from './cgit';

@InputType()
export class GitServerInput {
  @Field(() => GitDaemonInput, { nullable: true })
  daemon: GitDaemonInput;

  @Field(() => CGitInput, { nullable: true })
  cgit: CGitInput;
}
