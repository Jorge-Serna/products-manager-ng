import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductsService } from '../../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-search-form',
  templateUrl: './products-search-form.component.html',
  styleUrl: './products-search-form.component.scss'
})
export class ProductsSearchFormComponent implements OnInit {

  filtersForm: FormGroup;
  categories = [];

  constructor( 
    private fb: FormBuilder, 
    private productsService: ProductsService,
    private router: Router
  ){}

  ngOnInit(): void {
    // check LocalStorage

    this.filtersForm = this.fb.group({
      productId: [null],
      nameProduct: [null],
      creationDate: [null],
      category:[null],
      description: [null],
      deleted: [null],

      count: [true],
      page: [1]
    })

    this.productsService.getCategories().subscribe( data => {
      this.categories = data;
    })

    this.productsService.getProducts( this.filtersForm.value ).subscribe()
  }

  onSubmit(){
    if( this.isFormEmpty() ){
      return
    }

    this.productsService.getProducts( this.filtersForm.value )
  }

  resetForm() {


    if( this.isFormEmpty() ){
      return
    }

    this.filtersForm.reset({
      category: '',
      count: true,
      page: 1
    });

    this.productsService.getProducts( this.filtersForm.value )
      
  }

  isFormEmpty(){
    // remove white spaces of string inputs values
    Object.entries(this.filtersForm.value).forEach( ctrl => {
      if (typeof(ctrl[1]) === 'string' && ctrl[1].trim() === '') {
        this.filtersForm.get(ctrl[0]).setValue( null );
      }
    });

    var f = { ...this.filtersForm.value };
    const { count, page, ...rest } = f;

    var filteredValidValues = Object.entries( rest ).filter(([key, value]) =>
      value !== null && value !== undefined && value !== "" )

    if( filteredValidValues.length ) {
      return false
    }

    return true;
  }

  redirectToNewProduct() {
    this.router.navigate(['/products/new-product']);
  }

}
