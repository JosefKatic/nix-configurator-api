import { Field, ObjectType } from '@nestjs/graphql';
import { Quietboot } from './quietboot';
import { UEFI } from './uefi';

@ObjectType()
export class Boot {
  @Field(() => Quietboot, { nullable: false })
    quietboot: Quietboot;

  @Field(() => UEFI, { nullable: false })
    uefi: UEFI;
}
