import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsComponent } from './products/products.component';
import { ProductFiltersComponent } from './product-filters/product-filters.component';

const routes: Routes = [
  { path: '', component: ProductsComponent, children: [
    { path: '', component: ProductFiltersComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
