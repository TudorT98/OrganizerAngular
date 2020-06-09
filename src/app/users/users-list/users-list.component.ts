import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: []
})
export class UsersListComponent implements OnInit {

  constructor(public service: UsersService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

}
