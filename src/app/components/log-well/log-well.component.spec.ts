import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogWellComponent } from './log-well.component';

describe('LogWellComponent', () => {
  let component: LogWellComponent;
  let fixture: ComponentFixture<LogWellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogWellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogWellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
