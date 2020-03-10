import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-animal",
  templateUrl: "./animal.component.html",
  styles: []
})
export class AnimalComponent {
  animal: any = {};

  constructor(
    private _activadedRoute: ActivatedRoute,
  ) {
    
  }
}

