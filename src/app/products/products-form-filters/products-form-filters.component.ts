import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-form-filters',
  templateUrl: './products-form-filters.component.html',
  styleUrl: './products-form-filters.component.scss'
})
export class ProductsFormFiltersComponent implements OnInit {

  filtersForm: FormGroup;
  categories = [];

  blank = {
    productId: null,
    nameProduct: null,
    creationDate: null,
    category:null,
    description: null,
    status: true,
    count: true,
    page: 1
  }

  constructor( 
    private fb: FormBuilder, 
    private router: Router,
    private productsService: ProductsService
   ){
  }

  ngOnInit(){

    this.filtersForm = this.fb.group({
      productId: [null],
      nameProduct: [null],
      creationDate: [null],
      category:[null],
      description: [null],
      status: [true],
      count: [true],
      page: [1]
    })

    this.productsService.getCategories().subscribe( data => {
      this.categories = data;
    })

  }

  onSubmit(){

    const isFormBlank = this.compareBlankControlls();
    if( isFormBlank ){
      return
    }


    this.productsService.getProductsF( this.filtersForm.value )
    console.log(this.filtersForm.value)
    
  }

  resetForm() {

    this.filtersForm.reset({
      status: true,
      count: true,
      page: 1
    });

    this.productsService.getProductsF( this.filtersForm.value )
      
  }

  compareBlankControlls(){

    Object.keys(this.filtersForm.value).forEach(key => {

      const value = this.filtersForm.get(key)?.value;

      if (typeof(value) === 'string' && value.trim() === '')
        this.filtersForm.get(key).setValue(null);
      
    });

    if( JSON.stringify(this.filtersForm.value) === JSON.stringify(this.blank) ){
      return true;
    } else {
      return false;
    }
  }

  redirectToNewProduct() {

    this.router.navigate(['/products/new-product']);

  }

}
