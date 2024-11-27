import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Locale {
  @Field(() => String, { nullable: false })
    defaultLocale: string;

  @Field(() => [String], {
    nullable: false
  })
    supportedLocales: string[];

  @Field(() => String, { nullable: false })
    timeZone: string;
}
