import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Products } from './products/products';
import { IProduct } from '../models/iproduct';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-filter',
  standalone: true,
  imports: [FormsModule, Products, CommonModule],
  templateUrl: './product-filter.html',
  styleUrl: './product-filter.css',
})
export class ProductFilter {
  Filter: number = 0;
  Cart: IProduct[] = [];

  OnProductBought(product: IProduct): void {
    let existingProduct = this.Cart.find(
      p => p.ID == product.ID
    );
    if (existingProduct) {
      existingProduct.Quantity++;
    } else {
      this.Cart.push({
        ...product,
        Quantity: 1
      });
    }
  }
}