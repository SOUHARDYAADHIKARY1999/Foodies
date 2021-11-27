import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodRecipeComponent } from './food-recipe.component';

describe('FoodRecipeComponent', () => {
  let component: FoodRecipeComponent;
  let fixture: ComponentFixture<FoodRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodRecipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
