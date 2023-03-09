import { Component } from '@angular/core';

@Component({
  selector: 'app-date-comp',
  templateUrl: './date-comp.component.html',
  styleUrls: ['./date-comp.component.scss']
})
export class DateCompComponent {

  currentDate: Date = new Date();

  ngOnInit() {
    this.currentDate.getDate;
  }
  

}
