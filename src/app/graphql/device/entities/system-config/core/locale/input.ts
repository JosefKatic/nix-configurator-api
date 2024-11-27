import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class LocaleInput {
  @Field(() => String, { nullable: true })
  defaultLocale: string;

  @Field(() => [String], {
    nullable: true,
  })
  supportedLocales: string[];

  @Field(() => String, { nullable: true })
  timeZone: string;
}
