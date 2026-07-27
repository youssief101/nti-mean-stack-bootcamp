import { Routes } from '@angular/router';

import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { ProductFilter } from './product-filter/product-filter';
import { ProductDetails } from './product-details/product-details';
import { NotFound } from './not-found/not-found';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: ProductFilter,
    canActivate: [authGuard]
  },
  {
    path: 'home',
    component: Home
  },

  {
    path: 'products',
    component: ProductFilter
  },

  {
    path: 'products/:id',
    component: ProductDetails
  },

  {
    path: 'about',
    component: About
  },

  {
    path: 'contact',
    component: Contact
  },

  {
    path: '**',
    component: NotFound
  }

];