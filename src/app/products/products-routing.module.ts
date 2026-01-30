import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductsCreateUpdateComponent } from './products-create-update/products-create-update.component';
import { ProductsPageComponent } from './products-catalog/products-page/products-page.component';

const routes: Routes = [
  { path: '', component: ProductsComponent, children: [
    { path: '', component: ProductsPageComponent },
    { path: 'new-product', component: ProductsCreateUpdateComponent },
    { path: 'update-product/:id', component: ProductsCreateUpdateComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
