import { Injectable } from '@angular/core';
import { Users } from './users';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  readonly rootUrl = 'https://localhost:44359/api'
  list : Users[];
  formData:Users = {
    Id : null,
    FirstName: null,
    LasttName : null,
    Position : null,
    program : null,
    UserName : null
  }
  constructor(private http:HttpClient) { }


  postUser(formData:Users){
    return this.http.post(this.rootUrl + '/Users',formData);
  }

  refreshList(){
    this.http.get(this.rootUrl + '/Users')
    .toPromise()
    .then(res => this.list = res as Users[] )
  }
  
}
