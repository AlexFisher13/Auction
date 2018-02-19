import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product-service";

@Component({
  selector: 'auction-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {

  products = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }
}
