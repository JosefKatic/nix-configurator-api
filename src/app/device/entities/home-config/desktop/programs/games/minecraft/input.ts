import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class HomeMinecraftInput {
  @Field(() => Boolean, { nullable: true })
  enable: boolean;
}
