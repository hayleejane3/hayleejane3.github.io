import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'

import { AppComponent }  from './app.component';
import { NavbarComponent } from './navbar/navbar.component'
import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'



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
                    }
                  ])
                ],
  declarations: [ AppComponent,
                  NavbarComponent,
                  HomeComponent,
                  AboutComponent],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
