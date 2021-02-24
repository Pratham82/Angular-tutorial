import { Component } from '@angular/core'

@Component({
  selector: 'app-server',
  //selector: '[app-server]',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent {
  public server_ID: number = 22354
  public server_status: string = 'offline'

  constructor() {
    this.server_status = Math.random() > 0.5 ? 'online' : 'offfline'
  }
  getServerSatus() {
    return this.server_status
  }
  getColor() {
    return this.server_status === 'online' ? 'green' : 'red'
  }
}
