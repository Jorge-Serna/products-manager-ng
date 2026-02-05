import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductsCreateUpdateComponent } from './products-create-update/products-create-update.component';
import { ProductsDetailComponent } from './products-detail/products-detail.component';
import { ProductsCatalogComponent } from './products-catalog/products-catalog/products-catalog.component';

const routes: Routes = [
  { path: '', component: ProductsComponent, children: [
    { path: '', component: ProductsCatalogComponent },
    { path: 'new-product', component: ProductsCreateUpdateComponent },
    { path: 'update-product/:id', component: ProductsCreateUpdateComponent },
    { path: 'details/:id', component: ProductsDetailComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
