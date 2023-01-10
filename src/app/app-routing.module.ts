import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { CartComponent } from './orders/cart/cart.component';
import { ProductDetailGuard } from './products/product-detail.guard';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductListComponent } from './products/product-list/product-list.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductListComponent,
  },
  {
    path: 'products/:id',
    canActivate: [ProductDetailGuard],
    component: ProductDetailsComponent,
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: '**',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
