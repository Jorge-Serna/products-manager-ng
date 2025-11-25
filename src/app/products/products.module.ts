import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsComponent } from './products/products.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductsService } from './products.service';
import { ProductFiltersComponent } from './product-filters/product-filters.component';
import { SharedModule } from '../shared/shared.module';
import { ProductsFormFiltersComponent } from './products-form-filters/products-form-filters.component';
import { ProductsFormNewProductComponent } from './products-form-new-product/products-form-new-product.component';
import { ProductsPaginatorComponent } from './products-paginator/products-paginator.component';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductListComponent,
    ProductFiltersComponent,
    ProductsFormFiltersComponent,
    ProductsFormNewProductComponent,
    ProductsPaginatorComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    ProductsService
  ]
})
export class ProductsModule { }
