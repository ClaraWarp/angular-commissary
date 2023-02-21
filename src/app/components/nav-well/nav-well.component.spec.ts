import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavWellComponent } from './nav-well.component';

describe('NavWellComponent', () => {
  let component: NavWellComponent;
  let fixture: ComponentFixture<NavWellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavWellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavWellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
