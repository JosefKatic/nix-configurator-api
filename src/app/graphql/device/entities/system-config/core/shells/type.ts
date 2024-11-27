import { Field, ObjectType } from '@nestjs/graphql';
import { Fish } from './fish';
import { Zsh } from './zsh';

@ObjectType()
export class Shells {
  @Field(() => Fish, { nullable: false })
    fish: Fish;

  @Field(() => Zsh, { nullable: false })
    zsh: Zsh;
}
