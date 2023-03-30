import { Test, TestingModule } from '@nestjs/testing';
import { ValidateController } from './validate.controller';

describe('ValidateController', () => {
  let controller: ValidateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ValidateController],
    }).compile();

    controller = module.get<ValidateController>(ValidateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
