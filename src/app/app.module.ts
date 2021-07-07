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
import { PersistenceService } from './_services/persistence.service';
import { DBConfig } from 'ngx-indexed-db';
import { NgxIndexedDBModule } from 'ngx-indexed-db';

export function migrationFactory() {
    return {
        
    }
}

// Database configuration
const dbConfig: DBConfig = {
    name: 'Calendar',
    version: 1,
    objectStoresMeta: [{
        store: 'machzorim',
        storeConfig: { keyPath: 'id', autoIncrement: true },
        storeSchema: [
            { name: 'machzorStart', keypath: 'machzorStart', options: { unique: false } },
            { name: 'machzorEnd', keypath: 'machzorEnd', options: { unique: false } }
        ]
    }],
    migrationFactory
};
@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        NgbModule,
        FormsModule,
        NgxIndexedDBModule.forRoot(dbConfig)
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
        fakeBackendProvider,

        PersistenceService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
