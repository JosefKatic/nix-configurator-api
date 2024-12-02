import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class HomeHyprlandSettings {
  @Field(() => String, { nullable: false })
    mod: string; 
}
