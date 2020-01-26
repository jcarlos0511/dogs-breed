import { Component, OnInit } from '@angular/core';
import { AnimalsService , Animals} from '../../services/animals.service';



@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styles: []
})
export class AnimalsComponent implements OnInit {

  animals:Animals[]=[];

  constructor( private _animalsService:AnimalsService ) { }

  ngOnInit() {
    this.animals=this._animalsService.getAnimals();
    console.log(this.animals);
  }

}
