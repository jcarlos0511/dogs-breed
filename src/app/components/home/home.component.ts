import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  dogs: any[] = [];

  constructor( private http: HttpClient) {
    this.http.get('https://dog.ceo/api/breeds/list').subscribe((data:any)=>{
      console.log(data.message);
      this.dogs = data.message;
    });
   }

  ngOnInit() {

  }

}
