import { Component, OnInit } from "@angular/core";

import { ActivatedRoute, Router } from "@angular/router";
import { DogsService } from "src/app/services/dogs.service";

@Component({
  selector: "app-animals",
  templateUrl: "./animals.component.html",
  styles: []
})
export class AnimalsComponent implements OnInit {
  
  dog: {id:string}; //getting string (id) by url(parameter)
  images: any = [];
  subBreeds: any = [];
  constructor( 
    private router: Router,
    private _activadedRoute: ActivatedRoute,
    private dogService: DogsService
  ) {
    //getting id for parameter
    this._activadedRoute.params.subscribe(data => {
      //console.log(data['id']);
      this.dogService.getBreed(data["id"]).subscribe((data:any) => {
        console.log(data.message);
        //getting subBreeds for every breed
        this.subBreeds=data.message;
      });
    });

    


    //getting images
    this._activadedRoute.params.subscribe(data => {
      //console.log(data['id']);
      this.dogService.getImgRandom(data["id"]).subscribe(data => {
        console.log(data);
        this.images=data;
      });
    });
  }

  //getting string (id) by url(parameter)
  ngOnInit(){
    this.dog = {
      id: this._activadedRoute.snapshot.params.id
      
    };
    console.log(this.dog.id);
  }

  seeSubBreed(idx:string){
    console.log(idx);
    this.router.navigate( ['/animal',idx]);
  }
  
}
