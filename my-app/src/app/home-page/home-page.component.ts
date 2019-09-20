import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < dots.length; i++) {
    slides[i];
  }
 var slidesIndex;
 if (slidesIndex > slides.length) {slidesIndex = 1;}
 for (i = 0; i < dots.length; i++) {
dots[i].className = dots[i].className.replace("active", 
'');
 }
 setTimeout(this.showSlides, 2000);
}




  
}
