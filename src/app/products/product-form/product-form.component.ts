import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductsService } from '../../products.service';
import { Product } from '../../Product.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
export class ProductFormComponent implements OnInit {

  ngOnInit(): void {
    
  }

  product_id: number;
  product_name: string;
  upload_date: Date;
  description: string;
  price: number;
  status: boolean;

  onSubmit(form) {}

  status_value;

  // product_id_to_edit: number;

  // @Output() takeRegisterToParent = new EventEmitter<string>();

  // constructor(
  //   private productsService: ProductsService,
  //   private router: Router,
  //   private route: ActivatedRoute
  // ){}

  // ngOnInit(): void {
  //   this.product_id_to_edit = Number(this.route.snapshot.params['id'])
    
  //   if(this.product_id_to_edit)
  //   {
  //     let product_to_be_edited = this.productsService.getProductById(this.product_id_to_edit);

  //     console.log(product_to_be_edited)

  //     this.product_id = product_to_be_edited.id;
  //     this.product_name = product_to_be_edited.product_name;
  //     this.upload_date = product_to_be_edited.upload_date;
  //     this.description = product_to_be_edited.description;
  //     this.price = product_to_be_edited.price;
  //     // this.status = product_to_be_edited.active;
  //   }
  // }

  // onSubmit(form)
  // {
  //   this.product_id = this.getProductID()
  //   this.status = this.getCheckboxValue(this.status_value);
  //   let new_product = new Product(
  //     this.product_id, 
  //     this.product_name, 
  //     this.upload_date, 
  //     this.description, 
  //     this.price, 
  //     this.status
  //   );
  //   if(this.product_id_to_edit)
  //   {
  //     this.productsService.updateProduct(this.product_id_to_edit, new_product)
  //   }else{
      
  //     this.productsService.addItemsToTheList(new_product)
  //   }
  //   form.reset();
  //   this.router.navigate(['home'])
  // }

  // getCheckboxValue(value)
  // {
  //   let status
  //   if(value == 'active'){
  //     status = true;
  //     return status;
  //   }
  //   else if(value == 'inactive'){
  //     status  = false;
  //     return status;
  //   }
  //   else
  //     console.log('error')
  // }

  // getProductID()
  // {
  //   if(this.product_id_to_edit)
  //     return this.product_id;
  //   else
  //   {
  //     const list_of_products = this.productsService.getProducts();
  //     return list_of_products.length + 1;
  //   }
  // }
  
}
