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

  getDog(value: string){
    return this.getQuery(`breed/${value}/list`);
  }
  getImgBreed(value: string){
    return this.getQuery(`breed/${value}/images`);
  }

}
