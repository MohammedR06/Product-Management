import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ConvertToSpacesPipe } from './custompipes/convert-to-spaces.pipe';
import { StarComponent } from './star/star.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { ProductModule } from './products/product.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { CartComponent } from './orders/cart/cart.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [AppComponent, WelcomeComponent, CartComponent],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    ProductModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  exports: [MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
