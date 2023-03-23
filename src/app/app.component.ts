import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isShowClock = false
  isShowDate = false

  toggleClock(){
    this.isShowClock = !this.isShowClock
  }

  toggleDate(){
    this.isShowDate = !this.isShowDate
  }

}
