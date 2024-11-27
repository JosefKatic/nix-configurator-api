import { Field, ObjectType } from '@nestjs/graphql';
import { GitDaemon } from './daemon';
import { CGit } from './cgit';

@ObjectType()
export class GitServer {
  @Field(() => GitDaemon, { nullable: false })
    daemon: GitDaemon;

  @Field(() => CGit, { nullable: false })
    cgit: CGit;
}
