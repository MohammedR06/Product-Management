import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { IProduct } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  private productUrl = 'api/products/product.json';
  getProducts(): Observable<IProduct[]> {
    return this.http
      .get<IProduct[]>(this.productUrl)
      .pipe(catchError(this.handleError));
  }
  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occured ${err.message}`;
    } else {
      errorMessage = `Server returned code :${err.status},error message is ${err.message}`;
    }
    return throwError(() => errorMessage);
  }

  allUser() {
    return JSON.parse(localStorage.getItem('products') || '[]');
  }
  getUser(products: IProduct) {
    let isPresent = false;
    let users: any = localStorage.getItem('products');
    if (users === null) {
      localStorage.setItem('products', JSON.stringify([products]));
    } else {
      users = JSON.parse(localStorage.getItem('products') || '{}');
      users.map((item: IProduct) => {
        if (item.productId === products.productId) {
          item.quantity = products.quantity;

          isPresent = true;
        }
      });
      if (!isPresent) users.push(products);
      const product = JSON.stringify(users);
      localStorage.setItem('products', product);
    }
  }

  // deleteUser(id: number) {
  //   const users = this.allUser();
  //   for (var i = 0; i < users.length; i++) {
  //     if (users[i].id == id) {
  //       users.splice(i, 1);
  //     }
  //   }
  //   const product = JSON.stringify(users);
  //   localStorage.setItem('products', product);
  // }
}
