import { Input, OnChanges, Component, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import {CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { Store } from '../../models/store';
import { DiscountOffers } from '../../models/discount-offers';
import { IProduct } from '../../models/iproduct';
import { ICategory } from '../../models/icategory';
import { ProductCard } from '../../directives/product-card'
import { CreditCardPipe } from '../../pipes/credit-card-pipe'
import { ProductsService } from '../../services/products';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductCard, CreditCardPipe], // add RouterLink if you want <a>
  templateUrl: './products.html',
  styleUrl: './products.css',
})

export class Products implements OnChanges {
  // @yusuf: properties "a variable inside a class is simply a property"
  Discount = DiscountOffers.TenPercent;
  store: Store = new Store ('ITI Store', ['Cairo', 'Alexandria', 'Assiut'], 'logo.png');
  ClientName: string = "";
  IsPurchased: boolean = false;
  ProductList: IProduct[] = [];
  CategoryList: ICategory[] = [];
  SelectedCategoryID: number = 0;

  @Input() FilterPrice: number = 0;
  @Output() ProductBought = new EventEmitter<IProduct>(); 
  FilteredProducts: IProduct[] = [];
  PurchaseDate: Date = new Date();
  CreditCard: string = "1234567812345678"

  constructor(private productService:ProductsService, private router:Router) {
    this.CategoryList = [
      {ID: 1, Name: "Laptops"},
      {ID: 2, Name: "Mobiles"},
      {ID: 3, Name: "Accessories"}
    ];


    this.ProductList = this.productService.getAllProducts();
    this.FilteredProducts = this.ProductList;
  }

  Buy(product: IProduct): void {
    if (product.Quantity > 0) {
      product.Quantity--;
      this.PurchaseDate = new Date();
      this.ProductBought.emit(product);
    }
    
    if (this.ClientName != "") {
      this.IsPurchased = true;
    }
  };

  ShowDetails(id: number): void {
    this.router.navigate(['/products', id])
      .then(() => {
        console.log("Navigation Completed");
      });
  }

  ngOnChanges(): void {

    if(this.FilterPrice==0) {
        this.FilteredProducts =
            this.productService.getAllProducts();
    }
    else {
        this.FilteredProducts =
            this.productService
                .getAllProducts()
                .filter(p=>p.Price>=this.FilterPrice);
    }
  }
}