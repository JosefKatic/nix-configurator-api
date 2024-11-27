import { Field, ObjectType } from '@nestjs/graphql';
import { HDD } from './hdd';
import { SSD } from './ssd';

@ObjectType()
export class Disks {
  @Field(() => SSD, { nullable: false })
    ssd: SSD;

  @Field(() => HDD, { nullable: false })
    hdd: HDD;
}
