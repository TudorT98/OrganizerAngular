import { Component, OnInit } from '@angular/core';
import { CalendarService } from 'src/app/shared/calendar.service';

@Component({
  selector: 'app-calendar-list',
  templateUrl: './calendar-list.component.html',
  styleUrls: []
})
export class CalendarListComponent implements OnInit {

  constructor(public service: CalendarService) { }

  ngOnInit(): void {
    this.service.refreshList()
  }

}
