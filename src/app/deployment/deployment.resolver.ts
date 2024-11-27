import { Resolver } from '@nestjs/graphql';
import { DeploymentService } from './deployment.service';

@Resolver()
export class DeploymentResolver {
  constructor(private readonly deploymentService: DeploymentService) {}
}
