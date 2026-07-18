import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { Header } from './header/header';
import { Products } from './products/products';
import { Footer } from './footer/footer';
import { SideMenu } from './side-menu/side-menu';

@NgModule({
  declarations: [App, Header, Products, Footer, SideMenu],
  imports: [BrowserModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
