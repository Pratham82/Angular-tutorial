import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
// imports,declarations and bootstrap are metadata properties
/*
  // Imports property is used to bring in other angular modules that your module will need
  // Declarations property is used to make components, directives and pipes available to your modules
  //  Bootstrap property is used for root module and let angular know which component or componentswill be the starting point of the bootstrap process(Entry point of your app code)
  */
