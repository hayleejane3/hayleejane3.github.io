/**
 * Created by Tareq Boulakjar. from angulartypescript.com
 */
import { Component, Input } from '@angular/core';
import { Slide } from './slide.component';
import { Carousel } from './carousel.component';


/*Angular 2 Carousel - Gallery*/
@Component({
  selector: 'car',
  template:`
    <div class = "row">
      <div class = "col-md-12">
        <carousel [interval] = "NextPhotoInterval" style = "width:auto">
          <slide *ngFor = "let slidez of slides; let index=index"
             [active] = "slidez.active">
            <img [src] = "slidez.image" style = "margin: auto;">

            <div class = "carousel-caption">
              <p  style = "background-color: transparent; color: white;">{{slidez.text}}</p>
            </div>
          </slide>
        </carousel>
      </div>
    </div>`
})

export class CarouselImpl  {
  @Input() public cateogory: number;

  //The time to show the next photo
  public NextPhotoInterval: number = 5000;
  //Looping or not
  public noLoopSlides: boolean = true;
  //Photos
  public slides: Array<any> = [];

  constructor() {
    this.addNewSlide();
    this.cateogory = 3;
  }

  private addNewSlide() {
    this.slides.push (
      {image: "../../assets/images/qwcc-group.jpg", text: 'A Group Picture'},
      {image: "../../assets/images/qwcc-ceo.jpg", text: 'Hearing from the CEO'},
      {image: "../../assets/images/qwcc-patent.jpg", text: 'The Qualcomm Patent Wall'},
      {image: "../../assets/images/qwcc-hackathon.jpg", text: 'Hacking with Middle School girls'},
      {image: "../../assets/images/qwcc-interview.jpg", text: 'Mock Phone Interviews'},
      {image: "../../assets/images/qwcc-beach.jpg", text: 'Beach Bonfire Farewell Party'}
    );
  }

  private removeLastSlide() {
    this.slides.pop();
  }
}
