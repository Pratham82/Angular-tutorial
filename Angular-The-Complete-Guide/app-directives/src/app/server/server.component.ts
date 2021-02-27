import { Component } from '@angular/core'

@Component({
  selector: 'app-server',
  //selector: '[app-server]',
  templateUrl: './server.component.html',
  //styleUrls: ['./server.component.css'],
  styles: [
    `
      .heading2 {
        border: 2px solid #0db9db;
        padding: 20px;
      }

      .online {
        color: white;
      }
    `,
  ],
})
export class ServerComponent {
  public server_ID: number = 22354
  public server_status: string = 'offline'

  constructor() {
    this.server_status = Math.random() > 0.5 ? 'online' : 'offfline'
  }
  getServerStatus() {
    return this.server_status
  }
  getColor() {
    return this.server_status === 'online' ? 'green' : 'red'
  }
}
