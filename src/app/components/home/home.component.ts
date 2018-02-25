import { Component, OnInit } from '@angular/core';
import {Product, ProductService} from '../../services/product-service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'auction-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export default class HomeComponent {
  products: Product[] = [];
  titleFilter: FormControl = new FormControl();
  filterCriteria: string;

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
    this.titleFilter.valueChanges
      .subscribe(
        value => this.filterCriteria = value,
        error => console.error(error));
  }
}
