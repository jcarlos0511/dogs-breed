import { Component, OnInit } from "@angular/core";
import { AnimalsService, Animals } from "../../services/animals.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-animals",
  templateUrl: "./animals.component.html",
  styles: []
})
export class AnimalsComponent implements OnInit {
  animals: Animals[] = [];

  constructor(
    private _animalsService: AnimalsService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.animals = this._animalsService.getAnimals();
    //console.log(this.animals);
  }

  seeAnimal(idx: number) {
    this._router.navigate( ['/animal',idx]);
  }
}
