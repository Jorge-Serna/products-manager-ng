import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

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
      console.log(this.products)
    })

  }

  removeProduct(id) {
    
  }

}
