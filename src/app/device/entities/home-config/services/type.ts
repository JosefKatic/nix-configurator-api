import { Field, ObjectType } from '@nestjs/graphql';
import { HomeMediaServices } from './media';
import { HomeSystemServices } from './system';

@ObjectType()
export class HomeServices {
  @Field(() => HomeMediaServices, { nullable: false })
    media: HomeMediaServices;

  @Field(() => HomeSystemServices, { nullable: false })
    system: HomeSystemServices;
}
