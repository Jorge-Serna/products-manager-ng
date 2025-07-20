import { Injectable } from '@angular/core';
import { Product } from './Product.model';
import { DataService } from './data.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  controllerName = 'products';

  private productsSubject = new BehaviorSubject<any>([]);
  products$ = this.productsSubject.asObservable();

  constructor(private dataService: DataService) { }
  
  getProducts() {
    this.dataService.getAllElements<Product[]>(this.controllerName).subscribe( data => {
      this.productsSubject.next(data);
    });
  }

  getProduct(id) {

    this.dataService.getElementById(id, this.controllerName).subscribe( data => {
      console.log(data)
    })

  }

  createProduct(p) {
    this.dataService.createElement(p, this.controllerName).subscribe();
  }


}
