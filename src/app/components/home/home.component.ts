import { Component, OnInit } from "@angular/core";
import { DogsService } from "src/app/services/dogs.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
  breeds: any[] = [];
  subBreeds: any[] = [];
  loading: boolean;

  constructor(private router: Router, private dogService: DogsService) {
    this.loading = true;
    this.seeBreed();
    this.seeSubBreed();
  }

  ngOnInit() {}

  seeBreed() {
    this.dogService.getQuery("breeds/list").subscribe((data: any) => {
      console.log(data.message);
      return (this.breeds = data.message);
    });
    this.loading = false;
  }

  seeSubBreed() {
    this.dogService.getQuery("breeds/list/all").subscribe((data: any) => {
      console.log(data.message);
      return (this.subBreeds = data.message);
    });
    this.loading = false;
  }

  /* get wikipedia API*/

  /*seeDescription(id: string ){
    this.dogService.getQueryDes(id + '&utf8=&format=json').subscribe(data=>{
      console.log(data);
    });
  }*/

  /* */

  getBreed(idx:string){
    
    console.log(idx);
    this.router.navigate( ['/animals',idx]);
    
  }
}
