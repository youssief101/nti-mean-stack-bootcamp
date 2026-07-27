// @yusuf: a component is simply a typescript class that controls a part of the webpage
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header'
import { Footer } from './footer/footer'
import { SideMenu } from './side-menu/side-menu'
import { Products } from './product-filter/products/products'
import { ProductFilter } from './product-filter/product-filter'
import { IProduct } from './models/iproduct';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, SideMenu, ProductFilter, CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('day11-lab-assignment');
  Cart:IProduct[]=[];
  AddToCart(product:IProduct) {
    this.Cart.push(product);
  }
}
