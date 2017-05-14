import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import { HttpModule } from '@angular/http'

import { AppComponent }  from './app.component';
import { AboutComponent } from './about/about.component'
import { HomeComponent } from './home/home.component'
import { InvolvementComponent } from './involvement/involvement.component'
import { NavbarComponent } from './navbar/navbar.component'
import { ResumeComponent } from './resume/resume.component'
import { CarouselImpl } from './involvement/carousel-impl';
import { Carousel } from './involvement/carousel.component';
import { Slide } from './involvement/slide.component';


@NgModule({
  imports:      [ BrowserModule,
                  RouterModule.forRoot([
                    {
                      path: '',
                      component: HomeComponent
                    },
                    {
                      path: 'about',
                      component: AboutComponent
                    },
                    {
                      path: 'involvement',
                      component: InvolvementComponent
                    },
                    {
                      path: 'resume',
                      component: ResumeComponent
                    }
                  ]),
                  HttpModule
                ],
  declarations: [ AppComponent,
                  NavbarComponent,
                  HomeComponent,
                  AboutComponent,
                  InvolvementComponent,
                  ResumeComponent,
                  CarouselImpl,
                  Carousel,
                  Slide
              ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
