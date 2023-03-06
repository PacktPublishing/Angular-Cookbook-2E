import { Test, TestingModule } from '@nestjs/testing';
import { BucketService } from './bucket.service';

describe('BucketService', () => {
  let service: BucketService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BucketService],
    }).compile();

    service = module.get<BucketService>(BucketService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
