import {Component} from '@angular/core';
import {NgbCalendar, NgbCalendarHebrew, NgbDate, NgbDatepickerI18n, NgbDatepickerI18nHebrew} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-hebrew-date-picker-range',
    templateUrl: './hebrew-date-picker-range.component.html',
    styleUrls: ['./hebrew-date-picker-range.component.less'],
    providers: [
        {provide: NgbCalendar, useClass: NgbCalendarHebrew},
        {provide: NgbDatepickerI18n, useClass: NgbDatepickerI18nHebrew}
    ]
})
export class HebrewDatePickerRangeComponent {

    hoveredDate: NgbDate | null = null;

    fromDate: NgbDate;
    toDate: NgbDate | null = null;

    constructor(private calendar: NgbCalendar, public i18n: NgbDatepickerI18n) {
        this.fromDate = calendar.getToday();
        this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
    }

    onDateSelection(date: NgbDate) {
        if (!this.fromDate && !this.toDate) {
            this.fromDate = date;
        } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
            this.toDate = date;
        } else {
            this.toDate = null;
            this.fromDate = date;
        }
    }

    isHovered(date: NgbDate) {
        return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
    }

    isInside(date: NgbDate) {
        return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
    }

    isRange(date: NgbDate) {
        return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
    }
}