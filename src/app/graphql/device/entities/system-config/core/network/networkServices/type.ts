import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class NetworkServices {
  @Field(() => Boolean, { nullable: false })
    enableNetworkManager: boolean;

  @Field(() => Boolean, { nullable: false })
    enableAvahi: boolean;

  @Field(() => Boolean, { nullable: false })
    enableResolved: boolean;
}
