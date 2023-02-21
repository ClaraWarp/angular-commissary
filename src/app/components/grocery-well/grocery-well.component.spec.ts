import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryWellComponent } from './grocery-well.component';

describe('GroceryWellComponent', () => {
  let component: GroceryWellComponent;
  let fixture: ComponentFixture<GroceryWellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroceryWellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroceryWellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
