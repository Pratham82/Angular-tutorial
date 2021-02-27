import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  //template: '<p>This is start of user component</p> <app-server></app-server>',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  allowNewServer = false
  serverCreatioinStatus = 'No server was created'
  userStatus = false
  serverName = ''
  userName = 'Prathamesh'
  serverCreated = false
  servers = ['TestServer', 'TestServer2']
  constructor() {
    setTimeout(() => (this.allowNewServer = true), 2000)
  }

  onCreateServer() {
    this.serverCreated = true
    this.servers.push(this.serverName)
    this.serverCreatioinStatus = `New Server is created!! with name ${this.serverName}`
  }
  userAuth() {
    return (this.userStatus = !this.userStatus)
  }
  onUpdateServer(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value
  }

  onResetName() {
    this.userName = ''
  }

  ngOnInit(): void { }
}
