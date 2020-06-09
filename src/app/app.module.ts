import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UsersService } from './shared/users.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CalendarComponent } from './calendar/calendar.component';
import { ScheduleComponent } from './calendar/schedule/schedule.component';
import { ScheduleModel, ScheduleModule} from '@syncfusion/ej2-angular-schedule'
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailsComponent,
    UsersListComponent,
    CalendarComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ScheduleModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
