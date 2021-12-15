import { TestBed } from '@angular/core/testing';

import { FoodCrudService } from './food-crud.service';

describe('FoodCrudService', () => {
  let service: FoodCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
