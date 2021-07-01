import { Component, OnInit } from '@angular/core';
import {
  NgbCalendar,
  NgbCalendarHebrew, NgbDate,
  NgbDatepickerI18n,
  NgbDatepickerI18nHebrew,
  NgbDateStruct
} from '@ng-bootstrap/ng-bootstrap';
import { NgxIndexedDBService } from 'ngx-indexed-db';

@Component({
  selector: 'app-hebrew-date-picker',
  templateUrl: './hebrew-date-picker.component.html',
  styleUrls: ['./hebrew-date-picker.component.less'],
  providers: [
    {provide: NgbCalendar, useClass: NgbCalendarHebrew},
    {provide: NgbDatepickerI18n, useClass: NgbDatepickerI18nHebrew}
  ]
})
export class HebrewDatePickerComponent {

  model: NgbDateStruct;

  constructor(private calendar: NgbCalendar, public i18n: NgbDatepickerI18n,
    private db: NgxIndexedDBService) {
    this.dayTemplateData = this.dayTemplateData.bind(this);
  }

  dayTemplateData(date: NgbDate) {
    return {
      gregorian: (this.calendar as NgbCalendarHebrew).toGregorian(date)
    };
  }

  selectToday() {
    this.model = this.calendar.getToday();
  }

  public addMachzor() {
    this.db.add("machzorim", {
      machzorStart: new Date(2021, 6, 16),
      machzorEnd: new Date()
    }).subscribe(key => console.log(`key: ${key}`));
  }
}
