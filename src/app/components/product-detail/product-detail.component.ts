import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product, ProductService, Review} from '../../services/product-service';

@Component({
  selector: 'auction-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export default class ProductDetailComponent {
  product: Product;
  reviews: Review[];

  newComment;
  newRating;

  isReviewHidden = true;

  constructor(route: ActivatedRoute, productService: ProductService) {

    let prodId = parseInt(route.snapshot.params['productId'], 10);
    this.product = productService.getProductById(prodId);

    this.reviews = productService.getReviewsForProduct(this.product.id);
  }

  addReview() {
    let review = new Review(0, this.product.id, new Date(), 'Anonymous',
      this.newRating, this.newComment);
    console.log('Adding review ' + JSON.stringify(review));
    this.reviews = [...this.reviews, review];
    this.product.rating = this.averageRating(this.reviews);

    this.resetForm();
  }

  averageRating(reviews: Review[]) {
    let sum = reviews.reduce((average, review) => average + review.rating, 0);
    return sum / reviews.length;
  }

  resetForm() {
    this.newRating = 0;
    this.newComment = null;
    this.isReviewHidden = true;
  }
}
