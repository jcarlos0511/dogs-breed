import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


//routes

import { RouterModule } from '@angular/router';
import { routes } from '../app/app.routes';



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
    HttpClientModule,
    RouterModule.forRoot( routes, { useHash: true}),

  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
