import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = 'http://localhost:3000/'

  constructor( private httpClient: HttpClient ) { }

  getAllElements<T>(controller):Observable<T> {
    var customUrl = this.url + controller;
    return this.httpClient.get<T>(customUrl)
  }

  getElementById(id, controller) {
    var customUrl = this.url + controller + '/' + id;
    return this.httpClient.get(customUrl)
  }

  createElement(product, controller) {
    
    var customUrl = this.url + controller;

    return this.httpClient.post(customUrl, product);
  }

}
