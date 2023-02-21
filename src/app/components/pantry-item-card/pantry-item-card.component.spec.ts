import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantryItemCardComponent } from './pantry-item-card.component';

describe('PantryItemCardComponent', () => {
  let component: PantryItemCardComponent;
  let fixture: ComponentFixture<PantryItemCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantryItemCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PantryItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
