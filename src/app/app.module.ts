import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//services

import { AnimalsService } from '../app/services/animals.service'


//routes

import { app_routing } from './app.routes';

//components

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AnimalsComponent } from './components/animals/animals.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    AnimalsComponent
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [
    AnimalsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
