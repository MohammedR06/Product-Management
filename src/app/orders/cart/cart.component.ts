import {
  AfterViewInit,
  Component,
  OnChanges,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/products/product';
import { ProductService } from 'src/app/products/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit, AfterViewInit {
  constructor(private productService: ProductService, private router: Router) {}
  ngAfterViewInit(): void {
    this.updateTotalQuantity();
  }
  product: any;
  id: any;
  test: any;
  dataSource: any;
  products: IProduct[] | any = [];
  displayedColumns: string[] = [
    'imageUrl',
    'productName',
    'price',
    'show',
    'total',
    'productId',
  ];
  imageWidth = 50;
  imageMargin = 2;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  subTotal!: number;
  tax!: number;
  totalquantity: number = 0;
  totalProduct: number = 0;

  displayCart() {
    this.test = JSON.parse(localStorage.getItem('products') || '[]');
    this.products = this.test;
    this.totalPrice();
    this.tax = (this.subTotal / 100) * 5;
    this.dataSource = new MatTableDataSource(this.products);
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.displayCart();
    this.updateTotalQuantity();
  }

  onDelete(id: number) {
    this.dataSource.filteredData = this.dataSource.filteredData.filter(
      (e: any) => e.productId !== id
    );
    localStorage.setItem(
      'products',
      JSON.stringify(this.dataSource.filteredData)
    );
    this.displayCart();
  }
  quantityHandle(event: any, id: number) {
    let text = 'Are you sure you want to delete';
    this.test.map((product: IProduct) => {
      if (product.productId === id) {
        product.quantity = +event.target.value;
        this.productService.getUser(product);
        this.totalPrice();
      }
    });
    this.updateTotalQuantity();
  }
  totalPrice() {
    let products = this.productService.allUser();
    this.subTotal = 0;
    products.forEach((product: any) => {
      this.subTotal += product.price * product.quantity;
    });
  }
  updateTotalQuantity() {
    let products = this.productService.allUser();
    this.totalProduct = products.length;
    this.totalquantity = 0;
    products.forEach((product: any) => {
      this.totalquantity += product.quantity;
    });
  }
  onChange() {
    this.router.navigate(['/products']);
  }
  onAdd(product: any) {
    product.quantity++;
    localStorage.setItem(
      'products',
      JSON.stringify(this.dataSource.filteredData)
    );
    this.displayCart();
    this.updateTotalQuantity();
  }
  onCut(product: any) {
    let text = 'Are you sure you want to delete';
    if (product.quantity === 1) {
      alert('Are you sure you want to delete');
      product.quantity--;

      this.onDelete(product.productId);
      localStorage.setItem(
        'products',
        JSON.stringify(this.dataSource.filteredData)
      );
      this.displayCart();
      this.updateTotalQuantity();
    } else {
      product.quantity--;
      localStorage.setItem(
        'products',
        JSON.stringify(this.dataSource.filteredData)
      );
      this.displayCart();
      this.updateTotalQuantity();
    }

    if (product.quantity < 0) {
      product.quantity++;
    }
  }
}
