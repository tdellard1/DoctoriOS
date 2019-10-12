import { Component } from '@angular/core';

@Component({
  selector: 'slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css']
})
export class SlideShowComponent {
  selectedImageIndex = 0;
  images: Array<any> =

    [
      { image: 'assets/images/black-car.png' },
      { image: 'assets/images/red-car.png' },
      { image: 'assets/images/white-car.png' }
      // { image: 'assets/images/black-car.png' },
      // { image: 'assets/images/white-car.png' },
    ];

  onNext() {
    if (this.selectedImageIndex + 1 >= this.images.length) {
      this.selectedImageIndex = 0;
    } else {
      this.selectedImageIndex++;
    }
  }

  onPrevious() {
    if (this.selectedImageIndex === 0) {
      this.selectedImageIndex = this.images.length - 1;
    } else {
      this.selectedImageIndex--;
    }
  }





}



