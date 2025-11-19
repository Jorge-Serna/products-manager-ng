import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../Product.model';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-products-form-new-product',
  templateUrl: './products-form-new-product.component.html',
  styleUrl: './products-form-new-product.component.scss'
})
export class ProductsFormNewProductComponent implements OnInit {
  
  productForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private productsService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.productForm = this.fb.group({
      productName: ['', Validators.required],
      creationDate: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      stock: ['', Validators.required],
      category: ['', Validators.required],
      status: [ true, Validators.required]
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
