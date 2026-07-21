import { Component } from '@angular/core';
import { Store } from '../models/store'
import { DiscountOffers } from '../models/discount-offers'
import { IProduct } from '../models/iproduct'
import { ICategory } from '../models/icategory'

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  Discount = DiscountOffers.TenPercent;
  store: Store = new Store ('ITI Store', ['Cairo', 'Alexandria', 'Assiut'], 'logo.png');
  ClientName: string = "";
  IsPurchased: boolean = false;
  ProductList: IProduct[] = [];
  CategoryList: ICategory[] = [];
  SelectedCategoryID: number = 0;

  constructor() {
    this.CategoryList = [
      {ID: 1, Name: "Laptops"},
      {ID: 2, Name: "Mobiles"},
      {ID: 3, Name: "Accessories"}
    ];

    this.ProductList = [
      {
	ID: 1,
	Name: "Dell",
	Quantity: 5,
	Price: 28000,
	Img: "laptop.jpg",
	CategoryID: 1
      },
      {
	ID: 2,
	Name: "HP",
	Quantity: 0,
	Price: 28000,
	Img: "laptop2.jpg",
	CategoryID: 1
      },
      {
	ID: 3,
	Name: "Samsung",
	Quantity: 3,
	Price: 18000,
	Img: "phone.jpg",
	CategoryID: 2
      },
      {
	ID: 4,
	Name: "Logitech G102",
	Quantity: 8,
	Price: 500,
	Img: "mouse.jpg",
	CategoryID: 3
      }
    ];
  }

  Buy(product: IProduct): void {
    if (product.Quantity > 0) {
      product.Quantity--;
    }
    
    if (this.ClientName != "") {
      this.IsPurchased = true;
    }
  };
}
