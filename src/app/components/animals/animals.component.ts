import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-animals",
  templateUrl: "./animals.component.html",
  styles: []
})
export class AnimalsComponent implements OnInit {
  

  constructor( 
    
    private _router: Router
  ) {}

  ngOnInit() {
   
  }

  seeAnimal(idx: number) {
    this._router.navigate( ['/animal',idx]);
  }
}
