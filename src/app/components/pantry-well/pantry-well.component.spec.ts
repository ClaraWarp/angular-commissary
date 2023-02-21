import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantryWellComponent } from './pantry-well.component';

describe('PantryWellComponent', () => {
  let component: PantryWellComponent;
  let fixture: ComponentFixture<PantryWellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantryWellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PantryWellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
