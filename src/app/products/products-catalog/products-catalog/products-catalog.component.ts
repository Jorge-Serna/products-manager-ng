import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-products-catalog',
  templateUrl: './products-catalog.component.html',
  styleUrl: './products-catalog.component.scss'
})
export class ProductsCatalogComponent implements OnInit {

  searchProductsForm: FormGroup;

  constructor( 
    private fb: FormBuilder, 
    private productsService: ProductsService 
  ){}

  ngOnInit(): void {

    this.searchProductsForm = this.fb.group({
      productId: [null],
      nameProduct: [null],
      creationDate: [null],
      category:[null],
      deleted: [ false ],

      count: [true],
      page: [1]
    })

    this.productsService.getProducts( this.searchProductsForm.value ).subscribe()
    
  }

  getProducts(){
    this.productsService.getProducts( this.searchProductsForm.value ).subscribe()
  }

}
