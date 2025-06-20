import { Injectable } from '@angular/core';
import { Product } from './Product.model';
import { DataService } from './data.service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products$;

  constructor(private dataService: DataService) { }

  // addItemsToTheList(list_item: Product)
  // {
  //   this.products_list.push(list_item);
  // }

  // getProductById(id: number)
  // {
  //   let product = this.products_list[id - 1];
  //   return product;
  // }

  // updateProduct(id, product)
  // {
  //   this.products_list[id-1].id = product.id;
  //   this.products_list[id-1].product_name = product.product_name;
  //   this.products_list[id-1].upload_date = product.upload_date;
  //   this.products_list[id-1].description = product.description;
  //   this.products_list[id-1].price = product.price;
  //   this.products_list[id-1].active = product.active;
  // }

  // deleteProduct(id)
  // {
  //   this.products_list.splice(id,1)
  // }
  
  getProducts()
  {
    var controllerName = 'products';

    this.dataService.getAllElements(controllerName).subscribe( data => {

      console.log(data);

      this.products$ = of(data);
      
    })
    
  }
}
