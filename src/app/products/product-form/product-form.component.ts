import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../Product.model';
import { ProductsService } from '../../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
export class ProductFormComponent {

  productForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private productsService: ProductsService,
    private router: Router
  ) {

    this.productForm = this.fb.group({
      nameProduct: ['', Validators.required],
      creationDate: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required]
    })

  }

  async onSubmit() {

    if(this.productForm.valid) {

      console.log(this.productForm.value)

      var formValue = this.productForm.value;

      const newProduct: Product = new Product(
        formValue.nameProduct,
        formValue.creationDate,
        formValue.description,
        +formValue.price
      );

      await this.productsService.createProduct(newProduct);

      this.redirectTo('home');

    } else {
      console.log('something went wrong, try to post this product later please');
    }

  }

  getCheckboxValue(value)
  {
    let status
    if(value == 'active'){
      status = true;
      return status;
    }
    else if(value == 'inactive'){
      status  = false;
      return status;
    }
    else
      console.log('error')
  }

  redirectTo(route: string)
  {
    this.router.navigate([route]);
  }
  
}
