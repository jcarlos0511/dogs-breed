import { Component, OnInit } from "@angular/core";

import { ActivatedRoute } from "@angular/router";
import { DogsService } from "src/app/services/dogs.service";

@Component({
  selector: "app-animals",
  templateUrl: "./animals.component.html",
  styles: []
})
export class AnimalsComponent  {
  
  names: any = [];
  images: any = [];
  constructor( 
    
    private _activadedRoute: ActivatedRoute,
    private dogService: DogsService
  ) {
    this._activadedRoute.params.subscribe(data => {
      //console.log(data['id']);
      this.dogService.getDog(data["id"]).subscribe(data => {
        console.log(data);
        this.names=data;
      });
    });

    this._activadedRoute.params.subscribe(data => {
      //console.log(data['id']);
      this.dogService.getImgBreed(data["id"]).subscribe(data => {
        console.log(data);
        this.images=data;
      });
    });
  }
 
}
