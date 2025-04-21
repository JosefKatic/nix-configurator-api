import { Field, InputType } from '@nestjs/graphql';
import { LibvirtdInput } from './libvirtd';
import { PodmanInput } from './podman';
import { DockerInput } from './docker';

@InputType()
export class VirtualisationInput {
  @Field(() => DockerInput, { nullable: true })
  docker: DockerInput;

  @Field(() => PodmanInput, { nullable: true })
  podman: PodmanInput;

  @Field(() => LibvirtdInput, { nullable: true })
  libvirtd: LibvirtdInput;
}
