import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/users.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: []
})
export class UserDetailsComponent implements OnInit {

  constructor(public service: UsersService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.service.formData = {
      Id : null,
      FirstName: null,
      LasttName : null,
      Location : null,
      program : null,
      UserName : null
    }
  }
  onSubmit(form:NgForm)
  {
    this.service.postUser(form.value).subscribe(
      res => {this.resetForm(form)},
      err => {console.log(err)}
    )
  }

}
