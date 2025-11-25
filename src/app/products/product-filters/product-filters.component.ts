import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-filters',
  templateUrl: './product-filters.component.html',
  styleUrl: './product-filters.component.scss'
})
export class ProductFiltersComponent implements OnInit {

  filtersForm: FormGroup;

  constructor( 
    private fb: FormBuilder, 
    private productsService: ProductsService
  ){}

  ngOnInit(): void {

    // check LocalStorage

    this.filtersForm = this.fb.group({
      productId: [null],
      nameProduct: [null],
      creationDate: [null],
      category:[null],
      description: [null],
      deleted: [false],
      count: [true],
      page: [1]
    })

    this.productsService.getProducts( this.filtersForm.value );

  }

}
