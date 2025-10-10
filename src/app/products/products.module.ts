import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductsComponent } from './products/products.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductsService } from './products.service';
import { ProductFiltersComponent } from './product-filters/product-filters.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductListComponent,
    ProductFormComponent,
    ProductFiltersComponent
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
