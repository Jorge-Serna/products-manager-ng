import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products/products.component';
import { ProductFormComponent } from './products/product-form/product-form.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'products', loadChildren: () => import('./products/products.module').then(p => p.ProductsModule)
  },

  // { path: 'home/addProduct', component: ProductFormComponent },
  // { path: 'updateProduct/:id', component: ProductFormComponent },
  { path: '**', component: ErrorComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
