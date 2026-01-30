import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { DataService } from '../data.service';
import { Product } from '../Product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  
    private productsSubject = new BehaviorSubject<any>([]);
    products$ = this.productsSubject.asObservable();

    private totalProductsSubject = new BehaviorSubject<any>([]);
    totalProducts$ = this.totalProductsSubject.asObservable();
  
    constructor(private dataService: DataService) { }

    getProducts( filters ){
      return this.dataService.postElement( filters, 'products/filtered' ).pipe( 
        map( data => {
          if(filters.count && (Array.isArray(data) && data.length == 2)) {
            this.productsSubject.next(data[0]);
            this.totalProductsSubject.next(data[1]);
          } else {
            this.productsSubject.next(data);
          }
      })
      );
    }
  
    getProduct(id) {
  
      this.dataService.getElementById(id, 'products')
  
    }
  
    createProduct(p) {
      this.dataService.postElement(p, 'products')
    }

    getCategories() {
      return this.dataService.getAllElements<any[]>( 'categories' )
    }
}
