// @yusuf: a component is simply a typescript class that controls a part of the webpage
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header'
import { Footer } from './footer/footer'
import { SideMenu } from './side-menu/side-menu'
import { Products } from './product-filter/products/products'
import { ProductFilter } from './product-filter/product-filter'

@Component({
  selector: 'app-root',
  imports: [Header, Footer, SideMenu, ProductFilter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('day11-lab-assignment');
}
