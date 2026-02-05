import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-products-search-form',
  templateUrl: './products-search-form.component.html',
  styleUrl: './products-search-form.component.scss'
})
export class ProductsSearchFormComponent implements OnInit  {

  @Input() searchProductsForm: FormGroup;
  @Output() getProducts = new EventEmitter<void>();

  categories = [];

  constructor( 
    private productsService: ProductsService,
  ){}

  ngOnInit(): void {
    this.productsService.getCategories().subscribe( data => {
      this.categories = data;
    })
  }

  onSubmit(){

    if( this.isFormEmpty() )
      return;

    this.getProducts.emit();

  }

  resetForm() {
    if( this.isFormEmpty() ){
      return
    }

    this.searchProductsForm.reset({
      category: '',
      dleted: false,
      count: true,
      page: 1
    });

    this.getProducts.emit();
    
  }

  isFormEmpty(){
    // remove white spaces of string inputs values
    Object.entries(this.searchProductsForm.value).forEach( ctrl => {
      if (typeof(ctrl[1]) === 'string' && ctrl[1].trim() === '') {
        this.searchProductsForm.get(ctrl[0]).setValue( null );
      }
    });

    var f = { ...this.searchProductsForm.value };
    const { deleted, count, page, ...rest } = f;

    var filteredValidValues = Object.entries( rest ).filter(([key, value]) =>
      value !== null && value !== undefined && value !== "" )

    if( filteredValidValues.length ) {
      return false
    }

    return true;
  }

}
