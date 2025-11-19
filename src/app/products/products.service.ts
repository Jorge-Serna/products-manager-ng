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
  
    constructor(private dataService: DataService) { }
    
    getProducts() {
      this.dataService.getAllElements<Product[]>( 'products' ).subscribe( data => {
        this.productsSubject.next(data);
      });
    }

    getProductsF( filters ){
      this.dataService.postElement( filters, 'products/filtered' ).subscribe( data => {
        this.productsSubject.next(data);
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
