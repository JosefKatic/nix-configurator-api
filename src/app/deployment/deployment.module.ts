import { Module } from '@nestjs/common';
import { DeploymentService } from './deployment.service';
import { DeploymentResolver } from './deployment.resolver';

@Module({
  providers: [DeploymentResolver, DeploymentService],
})
export class DeploymentModule {}
