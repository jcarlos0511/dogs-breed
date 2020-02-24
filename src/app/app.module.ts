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
import { AnimalComponent } from './components/animal/animal.component';
import { SeekerComponent } from './components/seeker/seeker.component';
import { AnimalCardComponent } from './components/animal-card/animal-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    AnimalsComponent,
    AnimalComponent,
    SeekerComponent,
    AnimalCardComponent
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
