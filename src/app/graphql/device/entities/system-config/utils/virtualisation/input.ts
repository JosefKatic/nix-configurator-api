import { Field, InputType } from '@nestjs/graphql';
import { LibvirtdInput } from './libvirtd';
import { PodmanInput } from './podman';
import { DockerInput } from './docker';

@InputType()
export class VirtualisationInput {
  @Field(() => DockerInput)
  docker: DockerInput;

  @Field(() => PodmanInput)
  podman: PodmanInput;

  @Field(() => LibvirtdInput)
  libvirtd: LibvirtdInput;
}
