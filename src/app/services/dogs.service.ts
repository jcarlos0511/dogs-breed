import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DogsService {
 
  constructor(private http: HttpClient) {}
  
  getQuery(value: string) {
    const url = "https://dog.ceo/api/";
    return this.http.get(url + value);
  }

  getBreed(value: string){
    return this.getQuery(`breed/${value}/list`);
  }
  getSubBreed(value:string){
    return this.getQuery(`breed/${value}/images`);
  }

  getImgRandom(value: string){
    return this.getQuery(`breed/${value}/images/random`);
  }
  getImgBreed(value: string){
    return this.getQuery(`breed/${value}/images`);
  }

}
