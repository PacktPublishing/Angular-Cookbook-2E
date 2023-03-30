import { Test, TestingModule } from '@nestjs/testing';
import { ValidateService } from './validate.service';

describe('ValidateService', () => {
  let service: ValidateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ValidateService],
    }).compile();

    service = module.get<ValidateService>(ValidateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
