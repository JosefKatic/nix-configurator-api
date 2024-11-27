import { Test, TestingModule } from '@nestjs/testing';
import { DeploymentResolver } from './deployment.resolver';
import { DeploymentService } from './deployment.service';

describe('DeploymentResolver', () => {
  let resolver: DeploymentResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeploymentResolver, DeploymentService],
    }).compile();

    resolver = module.get<DeploymentResolver>(DeploymentResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
