import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { DogsService } from "src/app/services/dogs.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
  breeds: any[] = [];
  subBreeds: any[] = [];

  constructor(private http: HttpClient, private dogService: DogsService) {
    this.seeBreed();
    this.seeSubBreed();
  }

  ngOnInit() {}

  seeBreed() {
    this.dogService.getQuery("breeds/list").subscribe((data: any) => {
      console.log(data.message);
      return (this.breeds = data.message);
    });
  }

  seeSubBreed() {
    this.dogService.getQuery("breeds/list/all").subscribe((data: any) => {
      console.log(data.message);
      return (this.subBreeds = data.message);
    });
  }

  getBreed(idx:string){
    console.log(idx);
  }
}
