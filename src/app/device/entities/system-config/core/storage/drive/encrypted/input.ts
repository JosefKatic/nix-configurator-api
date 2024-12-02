import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class EncryptedInput {
  @Field(() => Boolean, { nullable: true })
  enable: boolean;

  @Field(() => String, {
    nullable: true,
  })
  path: string;
}
