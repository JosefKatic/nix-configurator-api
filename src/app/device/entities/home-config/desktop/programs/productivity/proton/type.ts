import { Field, ObjectType } from '@nestjs/graphql';
import { HomeProtonPass } from './pass';
import { HomeProtonMail } from './mail';
import { HomeProtonVPN } from './vpn';

@ObjectType()
export class HomeProton {
  @Field(() => HomeProtonMail, { nullable: true })
  mail: HomeProtonMail;

  @Field(() => HomeProtonPass, { nullable: true })
  pass: HomeProtonPass;

  @Field(() => HomeProtonVPN, { nullable: true })
  vpn: HomeProtonVPN;
}
