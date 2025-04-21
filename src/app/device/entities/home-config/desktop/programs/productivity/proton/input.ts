import { Field, InputType } from '@nestjs/graphql';
import { HomeProtonMailInput } from './mail';
import { HomeProtonVPNInput } from './vpn';
import { HomeProtonPassInput } from './pass';

@InputType()
export class HomeProtonInput {
  @Field(() => HomeProtonMailInput, { nullable: true })
  mail: HomeProtonMailInput;

  @Field(() => HomeProtonPassInput, { nullable: true })
  pass: HomeProtonPassInput;
  
  @Field(() => HomeProtonVPNInput, { nullable: true })
  vpn: HomeProtonVPNInput;
}
