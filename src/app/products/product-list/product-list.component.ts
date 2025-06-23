import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../products.service';
import { Product } from '../../Product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit{

  products;

  constructor(private productsService: ProductsService){}

  ngOnInit(): void {

    this.productsService.products$.subscribe( data => {
      this.products = data;
    })

  }

  removeProduct(id) {
    
  }


  // products: Product [] = [];

  // total = 500

  // values = [
  //   {price: 250},
  //   {price: 35},
  //   {price: 100},
  //   {price: 20}
  // ]

  // constructor(private productsService: ProductsService){}

  // ngOnInit(): void {
  //   this.products = this.productsService.products_list;
  //   this.learnReduceMethod()
  // }
  
 
  // learnReduceMethod()
  // {
  //   let result = this.values.reduce((init_value, item)=> init_value - item.price, this.total );
  //   console.log(result)
  // }

}
