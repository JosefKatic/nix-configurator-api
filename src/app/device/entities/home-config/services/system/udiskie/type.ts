import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class HomeUdiskie {
  @Field(() => Boolean, { nullable: false })
    enable: boolean;
}
