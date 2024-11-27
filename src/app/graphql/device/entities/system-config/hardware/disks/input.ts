import { Field, InputType } from '@nestjs/graphql';
import { HDDInput } from './hdd';
import { SSDInput } from './ssd';

@InputType()
export class DisksInput {
  @Field(() => SSDInput, { nullable: true })
  ssd: SSDInput;

  @Field(() => HDDInput, { nullable: true })
  hdd: HDDInput;
}
