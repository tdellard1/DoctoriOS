import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  countDown = new Date('October 6, 2019 21:00:25').getTime();
  timer = '';
  constructor() {
  }




// tslint:disable-next-line:prefer-const align no-unused-expression

  ngOnInit() {
    setInterval(() => {
      const now = new Date().getTime();
      const distance = this.countDown - now;

      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      this.timer = `${days}days ${hours}hours ${minutes}minutes ${seconds}seconds`;
      }, 1000);
  }
}
