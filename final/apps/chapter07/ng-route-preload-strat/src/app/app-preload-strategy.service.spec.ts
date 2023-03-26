import { TestBed } from '@angular/core/testing';

import { AppPreloadStrategyService } from './app-preload-strategy.service';

describe('AppPreloadStrategyService', () => {
  let service: AppPreloadStrategyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppPreloadStrategyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
