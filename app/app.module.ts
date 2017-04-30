import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component'
import { HomeComponent } from './home/home.component'
import { InvolvementComponent } from './involvement/involvement.component'
import { NavbarComponent } from './navbar/navbar.component'



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
                    }
                  ]),
                  HttpModule
                ],
  declarations: [ AppComponent,
                  NavbarComponent,
                  HomeComponent,
                  AboutComponent,
                  InvolvementComponent],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
