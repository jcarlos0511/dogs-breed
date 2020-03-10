import { Component, OnInit} from "@angular/core";
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
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    
  }
}
