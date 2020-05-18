import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HebrewDatePickerRangeComponent } from './hebrew-date-picker-range.component';

describe('HebrewDatePickerRangeComponent', () => {
  let component: HebrewDatePickerRangeComponent;
  let fixture: ComponentFixture<HebrewDatePickerRangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HebrewDatePickerRangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HebrewDatePickerRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
