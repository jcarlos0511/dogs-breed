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
  descriptions: any = [];
  url: any = "";
  loading: boolean;

  constructor( 
    private router: Router,
    private _activadedRoute: ActivatedRoute,
    private dogService: DogsService
  ) {

    this.loading = true;

    //getting id for parameter
    this._activadedRoute.params.subscribe(data => {
      //console.log(data['id']);
      this.dogService.getBreed(data["id"] ).subscribe((data:any) => {
        //console.log(data.message);
        //getting subBreeds for every breed
        this.subBreeds=data.message;
        this.loading = false;
      });
    });

    //getting description of wikipedia
    this._activadedRoute.params.subscribe(data=>{
      this.dogService.getQueryDes(data['id']).subscribe((data:any)=>{
        console.log( data.query.search);
        //adding snippet of first array.snippet for descriptions
        this.descriptions = this.dogService.removeHtml(data.query.search[0].snippet);
        console.log(this.descriptions);

        this.url = data.query.search[0].pageid;
        // console.log(this.url);
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
  
  seeWiki(idPage:any){
        
        this. url =  this.dogService.seeWiki(idPage);
        console.log(this.url);
         
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
