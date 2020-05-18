import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home';
import { CalendarComponent } from './calendar';
import { LoginComponent } from './login';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HebrewDatePickerComponent } from './hebrew-date-picker/hebrew-date-picker.component';
import { HebrewDatePickerRangeComponent } from './hebrew-date-picker-range/hebrew-date-picker-range.component';
@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        NgbModule,
        FormsModule,
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        CalendarComponent,
        LoginComponent,
        HebrewDatePickerComponent,
        HebrewDatePickerRangeComponent,
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
