import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapFoodComponent } from './wrap-food.component';

describe('WrapFoodComponent', () => {
  let component: WrapFoodComponent;
  let fixture: ComponentFixture<WrapFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrapFoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
