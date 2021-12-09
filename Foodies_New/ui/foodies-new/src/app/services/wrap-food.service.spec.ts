import { TestBed } from '@angular/core/testing';

import { WrapFoodService } from './wrap-food.service';

describe('WrapFoodService', () => {
  let service: WrapFoodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WrapFoodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
