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

  //remove the html that comes in the wikipedia API
  removeHtml(value:string){
    return value.replace(/<\/?[^>]+>/gi, '');
  }

  getQueryDes(value: string){
    const url ="https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=";
    const url2 = "%20dog&utf8=&format=json&origin=*";
    return this.http.get(url + value + url2 );
  }

  seeWiki( id: any ){
    const url = `https://en.wikipedia.org/?curid=${id}`;
    return url;
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
