import { Component } from '@angular/core';
import { Store } from '../models/store';
import { DiscountOffers } from '../models/discount-offers'

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  Discount: DiscountOffers = DiscountOffers.TenPercent;
  store: Store = new Store('ITI Store', ['Cairo', 'Sohag', 'Assiut'], 'logo.png');
  clientName: string = "Youssef";
}


