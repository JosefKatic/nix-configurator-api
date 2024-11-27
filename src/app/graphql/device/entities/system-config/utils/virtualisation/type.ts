import { Field, ObjectType } from '@nestjs/graphql';
import { Libvirtd } from './libvirtd';
import { Podman } from './podman';
import { Docker } from './docker';

@ObjectType()
export class Virtualisation {
  @Field(() => Docker, { nullable: false })
    docker: Docker;

  @Field(() => Podman, { nullable: false })
    podman: Podman;

  @Field(() => Libvirtd, { nullable: false })
    libvirtd: Libvirtd;
}
