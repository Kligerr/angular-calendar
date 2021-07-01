import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HebrewDatePickerComponent } from './hebrew-date-picker.component';

describe('HebrewDatePickerComponent', () => {
  let component: HebrewDatePickerComponent;
  let fixture: ComponentFixture<HebrewDatePickerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HebrewDatePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HebrewDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
