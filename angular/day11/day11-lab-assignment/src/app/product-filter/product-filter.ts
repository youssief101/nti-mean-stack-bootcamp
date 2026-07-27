import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Products } from './products/products';
import { IProduct } from '../models/iproduct';

@Component({
  selector: 'app-product-filter',
  standalone: true,
  imports: [FormsModule, Products],
  templateUrl: './product-filter.html',
  styleUrl: './product-filter.css',
})
export class ProductFilter {

  Filter: number = 0;

  @Output()
  ProductBought = new EventEmitter<IProduct>();

  OnProductBought(product: IProduct): void {
    this.ProductBought.emit(product);
  }
}