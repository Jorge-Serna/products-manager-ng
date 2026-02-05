import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './products-catalog/products-list/product-list.component';
import { ProductsComponent } from './products/products.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductsService } from './products.service';
import { SharedModule } from '../shared/shared.module';
import { ProductsPaginatorComponent } from './products-catalog/products-paginator/products-paginator.component';
import { ProductsSearchFormComponent } from './products-catalog/products-search-form/products-search-form.component';
import { ProductsCreateUpdateComponent } from './products-create-update/products-create-update.component';
import { ProductsDetailComponent } from './products-detail/products-detail.component';
import { ProductsCatalogComponent } from './products-catalog/products-catalog/products-catalog.component';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductListComponent,
    ProductsSearchFormComponent,
    ProductsCreateUpdateComponent,
    ProductsPaginatorComponent,
    ProductsCatalogComponent,
    ProductsDetailComponent,
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
