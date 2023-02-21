import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanningWellComponent } from './scanning-well.component';

describe('ScanningWellComponent', () => {
  let component: ScanningWellComponent;
  let fixture: ComponentFixture<ScanningWellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScanningWellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScanningWellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
