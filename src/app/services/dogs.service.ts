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

  removeHtml(value:string){
    return value.replace(/<\/?[^>]+>/gi, '');
  }

  getQueryDes(value: string){
    const url ="https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=";
    const url2 = "%20dog&utf8=&format=json&origin=*";
    return this.http.get(url + value + url2 );
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
