import { Test, TestingModule } from '@nestjs/testing';
import { NixController } from './nix.controller';
import { NixService } from './nix.service';

describe('NixController', () => {
  let controller: NixController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NixController],
      providers: [NixService],
    }).compile();

    controller = module.get<NixController>(NixController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
