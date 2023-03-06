import { Test, TestingModule } from '@nestjs/testing';
import { BucketController } from './bucket.controller';

describe('BucketController', () => {
  let controller: BucketController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BucketController],
    }).compile();

    controller = module.get<BucketController>(BucketController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
