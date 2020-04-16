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
import { AnimalsComponent } from './components/animals/animals.component';
import { AnimalComponent } from './components/animal/animal.component';
import { SeekerComponent } from './components/seeker/seeker.component';
import { AnimalCardComponent } from './components/animal-card/animal-card.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoadingComponent } from './shared/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AnimalsComponent,
    AnimalComponent,
    SeekerComponent,
    AnimalCardComponent,
    FooterComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    RouterModule.forRoot( routes, { useHash: true}),

  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
