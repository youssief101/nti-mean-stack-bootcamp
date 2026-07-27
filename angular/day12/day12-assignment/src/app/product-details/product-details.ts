import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { IProduct } from '../models/iproduct';
import { ProductsService } from '../services/products';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails implements OnInit {
  Product!: IProduct;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductsService
  ) { }

  ngOnInit(): void {
    let id =
      Number(
        this.activatedRoute.snapshot.paramMap.get('id')
      );
    let product =
      this.productService.getProductByID(id);
    if (product)
      this.Product = product;
  }
}