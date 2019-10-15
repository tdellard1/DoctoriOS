import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit {
  countDown = new Date('October 17, 2019 06:00:25').getTime();
  timer = '';



  constructor() { }

  ngOnInit() {
    setInterval(() => {

      //gets today's date
      const now = new Date().getTime();

      //the date we are counting to minus today's live time
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
