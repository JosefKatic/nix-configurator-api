import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class GitDaemon {
  @Field(() => Boolean, { nullable: false })
    enable: boolean;
}
