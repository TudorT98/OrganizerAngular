import { Injectable } from '@angular/core';
import { Calendar } from './calendar';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  readonly rootUrl = 'https://localhost:44359/api'
  list : Calendar[];
  formData:Calendar = {
    Id : null,
    UserId : null,
    day : null,
    user :null
  }
  constructor(private http:HttpClient) { }

  postCalendar(formData:Calendar){
    return this.http.post(this.rootUrl + '/Calendars',formData);
  }
  refreshList(){
    this.http.get(this.rootUrl + '/Calendars')
    .toPromise()
    .then(res => this.list = res as Calendar[] )
  }
}
