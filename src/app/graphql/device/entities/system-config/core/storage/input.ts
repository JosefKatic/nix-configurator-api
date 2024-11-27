import { Field, InputType } from '@nestjs/graphql';
import { DriveInput } from './drive';
import { SwapFileInput } from './swapFile';

@InputType()
export class StorageInput {
  @Field(() => Boolean, { nullable: true })
  enablePersistence: boolean;

  @Field(() => DriveInput, { nullable: true })
  systemDrive: DriveInput;

  @Field(() => [DriveInput], { nullable: true })
  otherDrives: DriveInput[];

  @Field(() => SwapFileInput, { nullable: true })
  swapFile: SwapFileInput;
}
