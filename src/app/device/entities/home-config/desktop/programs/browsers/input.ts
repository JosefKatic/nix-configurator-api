import { Field, InputType } from '@nestjs/graphql';
import { HomeBraveInput } from './brave';
import { HomeChromiumInput } from './chromium';
import { HomeFirefoxInput } from './firefox';

@InputType()
export class HomeBrowsersInput {
  @Field(() => HomeBraveInput, { nullable: true })
  brave: HomeBraveInput;
  
  @Field(() => HomeChromiumInput, { nullable: true })
  chromium: HomeChromiumInput;

  @Field(() => HomeFirefoxInput, { nullable: true })
  firefox: HomeFirefoxInput;
}
