"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var about_component_1 = require("./about/about.component");
var home_component_1 = require("./home/home.component");
var involvement_component_1 = require("./involvement/involvement.component");
var navbar_component_1 = require("./navbar/navbar.component");
var resume_component_1 = require("./resume/resume.component");
var carousel_impl_1 = require("./involvement/carousel-impl");
var carousel_component_1 = require("./involvement/carousel.component");
var slide_component_1 = require("./involvement/slide.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot([
                {
                    path: '',
                    component: home_component_1.HomeComponent
                },
                {
                    path: 'about',
                    component: about_component_1.AboutComponent
                },
                {
                    path: 'involvement',
                    component: involvement_component_1.InvolvementComponent
                },
                {
                    path: 'resume',
                    component: resume_component_1.ResumeComponent
                }
            ]),
            http_1.HttpModule
        ],
        declarations: [app_component_1.AppComponent,
            navbar_component_1.NavbarComponent,
            home_component_1.HomeComponent,
            about_component_1.AboutComponent,
            involvement_component_1.InvolvementComponent,
            resume_component_1.ResumeComponent,
            carousel_impl_1.CarouselImpl,
            carousel_component_1.Carousel,
            slide_component_1.Slide
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map