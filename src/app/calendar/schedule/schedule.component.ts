import { Component, OnInit } from '@angular/core';
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService } from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-schedule',
 // templateUrl: './schedule.component.html',
  styleUrls: [],
  providers:[DayService, WeekService, WorkWeekService, MonthService, AgendaService],
  template: `<ejs-schedule> </ejs-schedule>`
})
export class ScheduleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
