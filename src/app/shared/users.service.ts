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
    Location : null,
    program : null,
    UserName : null
  }
  constructor(private http:HttpClient) { }


  postUser(formData:Users){
    return this.http.post(this.rootUrl + '/Users',formData);
  }
  getUsers()
  {
    return this.http.get(this.rootUrl + '/Users').toPromise().then(res => res as Users[]) 
  }
  getUserId(userName)
  {
    console.log(this.rootUrl + '/Users/UsersIdByUsername/' + userName)
    return this.http.get(this.rootUrl + '/Users/UsersIdByUsername/' + userName).toPromise().then(res=> res as string)
    
  }

  refreshList(){
    this.http.get(this.rootUrl + '/Users')
    .toPromise()
    .then(res => this.list = res as Users[] )
  }
  
}
