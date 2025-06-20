import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = 'http://localhost:3000/'

  constructor(private httpClient: HttpClient) { }

  getAllElements(controller) {

    var customUrl = this.url + controller;

    console.log(customUrl)

    return this.httpClient.get(customUrl)

  }

}
