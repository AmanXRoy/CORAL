import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { ProductFilterComponent } from '../product-filter/product-filter.component';
import { ProductCardComponent } from '../product-filter/product-card/product-card.component';
import { BestSellerComponent } from '../best-seller/best-seller.component';
import { ProductPageComponent } from '../product-page/product-page.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ProductCartComponent } from '../product-cart/product-cart.component';
import { ProductDescriptionComponent } from '../product-description/product-description.component';
import { CheckoutPageComponent } from '../checkout-page/checkout-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
@NgModule({
  declarations: [
    HomeComponent,
    ProductFilterComponent,
    ProductCardComponent,
    BestSellerComponent,
    ProductPageComponent,
    ProductCartComponent,
    ProductDescriptionComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatMenuModule,
    MatIconModule,
    MatTabsModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule
  ],
  exports:[
    ProductFilterComponent,
    ProductCardComponent,
    BestSellerComponent,
    ProductPageComponent,
    ProductCartComponent,
    ProductDescriptionComponent,
  ]
})
export class HomeModule {}
