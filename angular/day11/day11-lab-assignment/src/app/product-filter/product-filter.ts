import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Products } from './products/products';

@Component({
  selector: 'app-product-filter',
  imports: [FormsModule, Products],
  templateUrl: './product-filter.html',
  styleUrl: './product-filter.css',
})
export class ProductFilter {
  Filter: number = 0;
}
