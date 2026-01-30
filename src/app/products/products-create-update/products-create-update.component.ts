import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../Product.model';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-products-create-update',
  templateUrl: './products-create-update.component.html',
  styleUrl: './products-create-update.component.scss'
})
export class ProductsCreateUpdateComponent implements OnInit {
  
  productForm: FormGroup;
  today = new Date();
  categories = [];

  constructor(
    private fb: FormBuilder, 
    private productsService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.productsService.getCategories().subscribe( data => {
      this.categories = data;
    })

    this.productForm = this.fb.group({
      productName: [null, Validators.required],
      description: [null, Validators.required],
      price: [null, Validators.required],
      stock: [null, Validators.required],
      category: ['', Validators.required],
    })
    
  }

  async onSubmit() {

    if(this.productForm.valid) {

      const newProduct: Product = new Product(
        this.productForm.get('productName').value,
        this.productForm.get('description').value,
        this.productForm.get('price').value,
        this.productForm.get('stock').value,
        this.productForm.get('stock').value > 0 ? true : false,
        Number(this.productForm.get('category').value,)
      );


      await this.productsService.createProduct( newProduct );

      this.redirectTo('home');

    } else {
      console.log('There is missing data, please complete the form');
    }
  }

  redirectTo(route: string)
  {
    this.router.navigate([route]);
  }

}
