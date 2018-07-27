import { Component } from '@angular/core';
import * as moment from 'moment';

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

    public getCurrentDateAsDateFormattedUTC(): string {
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

    public getCustom(): string {
        return 'Yeah... That ain\'t gonna happen';
    }

    public getMomentCurrentDate(): number {
        return moment.now();
    }

    public getMomentCurrentDateAsDate(): Date {
        return moment().toDate();
    }

    public getMomentCurrentDateAsISO(): string {
        return moment().toISOString();
    }

    public getMomentCurrentDateAsUTC(): string {
        return moment().utc().toISOString();
    }

    public getMomentCurrentDateAsDateString(): string {
        return moment().utc().toString();
    }

    public getMomentCurrentDateAsJSON(): string {
        return moment().toJSON();
    }

    public getMomentCurrentDateToString(): string {
        return moment().toString();
    }

    public getMomentCurrentDateTimeZone(): string {
        return moment().format('Z');
    }

    public getMomentCurrentDateCustom(): string {
        return moment().format('YYYY-MM-DDTHH:mm:ss.SSSSSSZ');
    }

    private getCurrentDate(): number {
        return Date.now();
    }
}
