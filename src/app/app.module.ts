import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApplicationComponent } from './components/application/application.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { SearchComponent } from './components/search/search.component';
import { ProductService } from './services/product-service';
import {RouterModule} from '@angular/router';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import ProductDetailComponent from './components/product-detail/product-detail.component';
import { FilterPipe } from './pipes/filter.pipe';
import HomeComponent from './components/home/home.component';
import StarsComponent from './components/stars/stars.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '',                    component: HomeComponent},
      {path: 'products/:productId', component: ProductDetailComponent}
    ]) ],
  declarations: [
    ApplicationComponent,
    CarouselComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    ProductDetailComponent,
    ProductItemComponent,
    SearchComponent,
    StarsComponent,
    FilterPipe],
  providers:    [ProductService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap:    [ ApplicationComponent ]
})
export class AppModule { }
