import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  //selector: '[app-server]',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent {
  public server_ID: number = 22354;
  public server_status: boolean = true;

  getServerSatus() {
    return this.server_status;
  }
}
