import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class HomeZathura {
  @Field(() => Boolean, { nullable: false })
    enable: boolean;
}
