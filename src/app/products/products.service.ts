import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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
      this.dataService.postElement( filters, 'products/filtered' ).subscribe( data => {

        if(filters.count && (Array.isArray(data) && data.length == 2)) {
          this.productsSubject.next(data[0]);
          this.totalProductsSubject.next(data[1]);
        } else {
          this.productsSubject.next(data);
        }

      });
    }
  
    getProduct(id) {
  
      this.dataService.getElementById(id, 'products').subscribe( data => {
        console.log(data)
      })
  
    }
  
    createProduct(p) {
      this.dataService.postElement(p, 'products').subscribe();
    }

    getCategories() {

      return this.dataService.getAllElements<any[]>( 'categories' )

    }
}
