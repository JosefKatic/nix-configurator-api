import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class DockerInput {
  @Field(() => Boolean, { nullable: true })
  enable: boolean;
}
