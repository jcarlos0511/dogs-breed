import { Component, OnInit } from "@angular/core";
import { AnimalsService } from "../../services/animals.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-seeker",
  templateUrl: "./seeker.component.html",
  styles: []
})
export class SeekerComponent implements OnInit {
  animals: any[] = [];
  termino : string;

  constructor(
    private _animalsService: AnimalsService,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.termino=params["termino"];
      this.animals = this._animalsService.searchAnimal(params["termino"]);
      console.log(this.animals);
    });
  }
}
