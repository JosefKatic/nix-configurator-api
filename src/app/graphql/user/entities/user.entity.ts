import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Schema as MongooSchema } from 'mongoose';
import { HomeConfig } from '../../device/entities/home-config';

@ObjectType()
export class User {
  @Field(() => String, { description: 'Example field (placeholder)' })
  _id: MongooSchema.Types.ObjectId;

  @Field(() => String)
    username: string;

  @Field(() => [HomeConfig], { defaultValue: [] })
    homeConfig: HomeConfig[];
}
