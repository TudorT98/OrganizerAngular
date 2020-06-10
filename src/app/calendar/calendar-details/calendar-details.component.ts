import { Component, OnInit } from '@angular/core';
import { CalendarService } from 'src/app/shared/calendar.service';
import { NgForm } from '@angular/forms';
import { UsersService } from 'src/app/shared/users.service';
import { Users } from 'src/app/shared/users';

@Component({
  selector: 'app-calendar-details',
  templateUrl: './calendar-details.component.html',
  styleUrls: []
})
export class CalendarDetailsComponent implements OnInit {
 // users : Users[] = new Array();
  userNames : string[] = ["ttopa","apotlog"];
  selectedUser : string;
  constructor(public service:CalendarService, public userService:UsersService) {
   }

  pupulateDropDown()
  {
   for(var us of this.userService.list )
   { this.userNames.push(us.UserName); }
 }
  ngOnInit(): void {
    this.resetForm();
   // this.pupulateDropDown();
  }
  resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.service.formData = {
      Id : null,
      UserId: null,
      user : null,
      day : null,
    }
  }

     onSubmit(form:NgForm)
     {
       form.setValue({
         UserId : this.userService.getUserId(this.selectedUser),
         userName : null,
         day : new Date()
       });
       delete form.value['userName']
       this.service.postCalendar(form.value).subscribe(
         res => {this.resetForm(form)},
         err => {console.log(err)}
       )
       }

}
