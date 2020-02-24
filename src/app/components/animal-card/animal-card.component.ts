import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-animal-card",
  templateUrl: "./animal-card.component.html",
  styleUrls: ["./animal-card.component.css"]
})
export class AnimalCardComponent implements OnInit {
  @Input() animal: any = {};
  @Input() index: number;

  @Output() animalSelect: EventEmitter<number>;

  constructor(private _router: Router) {

    this.animalSelect = new EventEmitter();

  }

  ngOnInit(): void {}

  seeAnimal() {
    this._router.navigate( ['/animal', this.index]);

    //with comunication father / son
    //this.animalSelect.emit(this.index);
  }
}
