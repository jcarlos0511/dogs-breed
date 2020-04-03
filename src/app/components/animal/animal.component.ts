import { Component } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { DogsService } from 'src/app/services/dogs.service';



@Component({
  selector: "app-animal",
  templateUrl: "./animal.component.html",
  styles: []
})
export class AnimalComponent {

  images: any = [];
  loading: boolean;

  constructor( private activatedRoute: ActivatedRoute, private dogService: DogsService ) {
    this.loading = true;
  this.activatedRoute.params.subscribe( data =>{
    //console.log(data['id']);
    this.dogService.getSubBreed(data['id']).subscribe((data:any)=>{
      console.log(data.message);
      this.images = data.message;
      this.loading = false;
    });
  });
  
  }
}
