"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Tareq Boulakjar. from angulartypescript.com
 */
var core_1 = require("@angular/core");
/*Angular 2 Carousel - Gallery*/
var CarouselImpl = (function () {
    function CarouselImpl() {
        //The time to show the next photo
        this.NextPhotoInterval = 5000;
        //Looping or not
        this.noLoopSlides = true;
        //Photos
        this.slides = [];
        this.addNewSlide();
        this.cateogory = 3;
    }
    CarouselImpl.prototype.addNewSlide = function () {
        this.slides.push({ image: "../../resources/images/qwcc-group.jpg", text: 'A Group Picture' }, { image: "../../resources/images/qwcc-ceo.jpg", text: 'Hearing from the CEO' }, { image: "../../resources/images/qwcc-patent.jpg", text: 'The Qualcomm Patent Wall' }, { image: "../../resources/images/qwcc-hackathon.jpg", text: 'Hacking with Middle School girls' }, { image: "../../resources/images/qwcc-interview.jpg", text: 'Mock Phone Interviews' }, { image: "../../resources/images/qwcc-beach.jpg", text: 'Beach Bonfire Farewell Party' });
    };
    CarouselImpl.prototype.removeLastSlide = function () {
        this.slides.pop();
    };
    return CarouselImpl;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], CarouselImpl.prototype, "cateogory", void 0);
CarouselImpl = __decorate([
    core_1.Component({
        selector: 'car',
        template: "\n    <div class = \"row\">\n      <div class = \"col-md-12\">\n        <carousel [interval] = \"NextPhotoInterval\" style = \"width:auto\">\n          <slide *ngFor = \"let slidez of slides; let index=index\"\n             [active] = \"slidez.active\">\n            <img [src] = \"slidez.image\" style = \"margin: auto;\">\n\n            <div class = \"carousel-caption\">\n              <p  style = \"background-color: transparent; color: white;\">{{slidez.text}}</p>\n            </div>\n          </slide>\n        </carousel>\n      </div>\n    </div>"
    }),
    __metadata("design:paramtypes", [])
], CarouselImpl);
exports.CarouselImpl = CarouselImpl;
//# sourceMappingURL=carousel-impl.js.map