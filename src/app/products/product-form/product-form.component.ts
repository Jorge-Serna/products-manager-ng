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
      price: ['', Validators.required],
      stock: ['', Validators.required],
      status: [ false, Validators.required]
    })

  }

  async onSubmit() {

    if(this.productForm.valid) {

      var formValue = this.determineStatus(this.productForm.value);

      const newProduct: Product = new Product(
        formValue.nameProduct,
        formValue.creationDate,
        formValue.description,
        +formValue.price,
        formValue.status,
        formValue.stock
      );

      console.log(newProduct)

      await this.productsService.createProduct(newProduct);

      this.redirectTo('home');

    } else {
      console.log('something went wrong, try to post this product later please');
    }
  }

  determineStatus(p) {

    if(p.status == 'true') {
      p.status = true;
    } else {
      p.status = false;
    }
    return p;
  }

  redirectTo(route: string)
  {
    this.router.navigate([route]);
  }
  
}
