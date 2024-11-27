import { Field, InputType } from '@nestjs/graphql';
import { KeycloakInput } from './keycloak';
import { FreeIPAInput } from './freeipa';

@InputType()
export class AuthInput {
  @Field(() => FreeIPAInput, { nullable: true })
  freeipa: FreeIPAInput;

  @Field(() => KeycloakInput, { nullable: true })
  keycloak: KeycloakInput;
}
