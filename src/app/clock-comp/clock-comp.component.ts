import { Component } from '@angular/core';

@Component({
  selector: 'app-clock-comp',
  templateUrl: './clock-comp.component.html'
})
export class ClockCompComponent {

  currentTime: Date = new Date();

  ngOnInit() {
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  }

}
