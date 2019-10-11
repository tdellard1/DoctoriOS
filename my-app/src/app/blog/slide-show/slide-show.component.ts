import { Component } from '@angular/core';

@Component({
  selector: 'slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css']
})
export class SlideShowComponent {

  items: Array<any> = [];

  constructor() {
    this.items = [
      { name: 'assets/images/red-car.png' },
      { name: 'assets/images/white-car.png' },
      { name: 'assets/images/black-car.png' }
    ];
  }



}
