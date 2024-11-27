import { Field, ObjectType } from '@nestjs/graphql';
import { Drive } from './drive';
import { SwapFile } from './swapFile';
import { Prop } from '@nestjs/mongoose';

@ObjectType()
export class Storage {
  @Field(() => Boolean, { nullable: false })
    enablePersistence: boolean;

  @Field(() => Drive, { nullable: false })
    systemDrive: Drive;

  @Field(() => [Drive], { nullable: false})
    otherDrives: Drive[];

  @Field(() => SwapFile, { nullable: false })
    swapFile: SwapFile;
}
