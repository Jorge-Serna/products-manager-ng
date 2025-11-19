import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductFiltersComponent } from './product-filters/product-filters.component';
import { ProductsFormNewProductComponent } from './products-form-new-product/products-form-new-product.component';

const routes: Routes = [
  { path: '', component: ProductsComponent, children: [

    { path: '', component: ProductFiltersComponent },
    { path: 'new-product', component: ProductsFormNewProductComponent },
    { path: 'update-product/:id', component: ProductsFormNewProductComponent }

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
