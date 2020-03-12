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

}