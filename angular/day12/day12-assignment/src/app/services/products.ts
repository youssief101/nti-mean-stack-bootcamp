import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: IProduct[] = [
    {
      ID: 1,
      Name: 'Dell',
      Quantity: 5,
      Price: 28000,
      Img: 'laptop.jpg',
      CategoryID: 1
    },
    {
      ID: 2,
      Name: 'HP',
      Quantity: 0,
      Price: 28000,
      Img: 'laptop2.jpg',
      CategoryID: 1
    },
    {
      ID: 3,
      Name: 'Samsung',
      Quantity: 3,
      Price: 18000,
      Img: 'phone.jpg',
      CategoryID: 2
    },
    {
      ID: 4,
      Name: 'Logitech G102',
      Quantity: 8,
      Price: 500,
      Img: 'mouse.jpg',
      CategoryID: 3
    }
  ];

  constructor() {}

  getAllProducts(): IProduct[] {
    return this.products;
  }

  getProductsByCatID(catID: number): IProduct[] {

    if (catID == 0)
      return this.products;

    return this.products.filter(
      p => p.CategoryID == catID
    );
  }

  getProductByID(prodID: number): IProduct | undefined {

    return this.products.find(
      p => p.ID == prodID
    );

  }

}