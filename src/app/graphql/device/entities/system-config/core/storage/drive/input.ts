import { Field, InputType } from '@nestjs/graphql';
import { EncryptedInput } from './encrypted';

@InputType()
export class DriveInput {
  @Field(() => String, { nullable: true })
  name: string;

  @Field(() => String, { nullable: true })
  path: string;

  @Field(() => EncryptedInput, { nullable: true })
  encrypted: EncryptedInput;
}
