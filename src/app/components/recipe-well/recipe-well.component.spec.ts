import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeWellComponent } from './recipe-well.component';

describe('RecipeWellComponent', () => {
  let component: RecipeWellComponent;
  let fixture: ComponentFixture<RecipeWellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeWellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeWellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
