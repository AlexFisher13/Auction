import { Component, OnInit } from '@angular/core';
import {Product, ProductService} from '../../services/product-service';

@Component({
  selector: 'auction-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products: Product[] = [];

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }
}
