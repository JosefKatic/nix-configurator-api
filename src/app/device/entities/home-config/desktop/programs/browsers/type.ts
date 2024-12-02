import { Field, ObjectType } from '@nestjs/graphql';
import { HomeBrave } from './brave';
import { HomeChromium } from './chromium';
import { HomeFirefox } from './firefox';

@ObjectType()
export class HomeBrowsers {
  @Field(() => HomeBrave, { nullable: false })
    brave: HomeBrave;

  @Field(() => HomeChromium, { nullable: false })
    chromium: HomeChromium;

  @Field(() => HomeFirefox, { nullable: false })
    firefox: HomeFirefox;
}
