import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {

  constructor(private router: Router, private productsService: ProductsService) {}

  ngOnInit(): void {
    console.log('en home')
    this.productsService.getProducts();
  }

  redirectTo(route: string)
  {
    this.router.navigate([route]);
  }

}
