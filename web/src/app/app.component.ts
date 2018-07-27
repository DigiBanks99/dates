import { Component } from '@angular/core';
import { Time } from '@angular/common';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';

    public getCurrentDateAsNumber(): string {
        return this.getCurrentDate().toString();
    }

    public getCurrentDateAsDate(): Date {
        return new Date(this.getCurrentDate());
    }

    public getCurrentDateAsDateFormattedISO(): string {
        return this.getCurrentDateAsDate().toISOString();
    }

    public getCurrentDateAsDateFormattedUCT(): string {
        return this.getCurrentDateAsDate().toUTCString();
    }

    public getCurrentDateAsDateFormattedDate(): string {
        return this.getCurrentDateAsDate().toDateString();
    }

    public getCurrentDateAsDateFormattedJSON(): string {
        return this.getCurrentDateAsDate().toJSON();
    }

    public getCurrentDateAsDateToString(): string {
        return this.getCurrentDateAsDate().toString();
    }

    public getCurrentDateAsDateTimeZoneOffset(): number {
        return this.getCurrentDateAsDate().getTimezoneOffset();
    }

    public getTimeZone(): string {
        const tz = this.getCurrentDateAsDateTimeZoneOffset();
        const time = {
            hours: tz / 60,
            minutes: tz % 60
        };

        return `${time.hours.toString().padStart(2, '0')}:${time.minutes.toString().padStart(2, '0')}`;
    }

    private getCurrentDate(): number {
        return Date.now();
    }
}
