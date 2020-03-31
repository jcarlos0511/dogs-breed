import { Component, OnInit} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DogsService } from 'src/app/services/dogs.service';

@Component({
  selector: "app-seeker",
  templateUrl: "./seeker.component.html",
  styles: []
})
export class SeekerComponent implements OnInit {
  
  termino : string;
  breeds: any[] = [];

  constructor(
    private _activatedRoute: ActivatedRoute , private dogService: DogsService
  ) {

    this._activatedRoute.params.subscribe( data =>{

      console.log(data);
      this.termino = data.termino;

      this.searchBreed(this.termino);

    });

  }

  ngOnInit() {
    
  }

  searchBreed(termino:string) {
     this.dogService.getQuery(`breed/${termino}/images`).subscribe((data: any) => {
       console.log(data.message);
       return (this.breeds = data.message);
     });
   }
}
