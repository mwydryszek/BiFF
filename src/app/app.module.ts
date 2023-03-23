import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClockCompComponent } from './clock-comp/clock-comp.component';
import { DateCompComponent } from './date-comp/date-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockCompComponent,
    DateCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
