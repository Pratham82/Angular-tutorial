import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  //template: '<p>This is start of user component</p> <app-server></app-server>',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  allowNewServer = false;
  serverCreatioinStatus = 'No server was created';
  userStatus = false;
  serverName = 'OldName';
  userName = 'Prathamesh';
  constructor() {
    setTimeout(() => (this.allowNewServer = true), 2000);
  }

  onCreateServer() {
    this.serverCreatioinStatus = 'New Server is created!!' + this.serverName;
  }
  userAuth() {
    return (this.userStatus = !this.userStatus);
  }
  onUpdateServer(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onResetName() {
    this.userName = '';
  }

  ngOnInit(): void {}
}
