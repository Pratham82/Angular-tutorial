import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ClientComponent } from './client2/cleint.component';
import { UsersComponent } from './users/users.component';
import { AssignmentComponent } from './assignment/assignment.component';
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ClientComponent,
    UsersComponent,
    AssignmentComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
