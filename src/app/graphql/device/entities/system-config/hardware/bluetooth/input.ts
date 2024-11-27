import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class BluetoothInput {
  @Field(() => Boolean, { nullable: true })
  enable: boolean;

  @Field(() => Boolean, { nullable: true })
  enableManager: boolean;
}
