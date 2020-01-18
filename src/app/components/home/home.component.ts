import { Component, OnInit } from '@angular/core';
import {  AnimalsService, Animals } from '../../services/animals.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  animals: Animals[] = [];

  constructor( private _animalsServices: AnimalsService) { }

  ngOnInit() {

   this.animals=this._animalsServices.getAnimals();
   console.log(this.animals);
  }

}
