import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-form-filters',
  templateUrl: './products-form-filters.component.html',
  styleUrl: './products-form-filters.component.scss'
})
export class ProductsFormFiltersComponent implements OnInit {

  @Input('fg') filtersForm: FormGroup;

  //filtersForm: FormGroup;
  categories = [];

  constructor( 
    private router: Router,
    private productsService: ProductsService
   ){
  }

  ngOnInit(){

    this.productsService.getCategories().subscribe( data => {
      this.categories = data;
    })

  }

  onSubmit(){

    if( this.isFormEmpty() ){
      return
    }


    // this.productsService.getProducts( this.filtersForm.value )

    
  }

  resetForm() {

    this.filtersForm.reset({
      status: true,
      count: true,
      page: 1
    });

    // this.productsService.getProductsF( this.filtersForm.value )
      
  }

  isFormEmpty(){
    // remove white spaces of string inputs values
    Object.keys(this.filtersForm.value).forEach(key => {

      const value = this.filtersForm.get(key)?.value;

      if (typeof(value) === 'string' && value.trim() === '') {
        this.filtersForm.get(key).setValue(null);
      }
    });

    var filteredValidValues = Object.entries( this.filtersForm.value ).filter(([_, value]) =>
      value !== null || value !== undefined || value !== ""
    )

    console.log(filteredValidValues)

    if(filteredValidValues.length) {
      return false
    }

    return true;



  }

  redirectToNewProduct() {
    this.router.navigate(['/products/new-product']);
  }

}
