import { Field, InputType } from '@nestjs/graphql';
import { QuietbootInput } from './quietboot';
import { UEFIInput } from './uefi';

@InputType()
export class BootInput {
  @Field(() => QuietbootInput, { nullable: true })
  quietboot: QuietbootInput;

  @Field(() => UEFIInput, { nullable: true })
  uefi: UEFIInput;
}
