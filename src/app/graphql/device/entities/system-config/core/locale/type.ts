import { Field, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';

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
