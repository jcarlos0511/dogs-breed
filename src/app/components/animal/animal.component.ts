import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AnimalsService } from "../../services/animals.service";

@Component({
  selector: "app-animal",
  templateUrl: "./animal.component.html",
  styles: []
})
export class AnimalComponent {
  animal: any = {};

  constructor(
    private _activadedRoute: ActivatedRoute,
    private _animalsService: AnimalsService
  ) {
    this._activadedRoute.params.subscribe(params => {
      //console.log(params['id']);
      this.animal = this._animalsService.getAnimal(params['id']);
      //console.log(this.animal);
    });
  }
}
