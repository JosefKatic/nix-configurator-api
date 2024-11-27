import { Test, TestingModule } from '@nestjs/testing';
import { NixService } from './nix.service';

describe('NixService', () => {
  let service: NixService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NixService],
    }).compile();

    service = module.get<NixService>(NixService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
