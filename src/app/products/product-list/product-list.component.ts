import {
  AfterViewInit,
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { IProduct } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  show: any;
  constructor(private productService: ProductService) {}
  user: any;
  title: string = 'Product List';
  image = true;
  errorMessage: string = '';
  imageWidth = 50;
  imageMargin = 2;
  sub!: Subscription;
  id!: number;
  dataSource!: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  filteredProducts: IProduct[] = [];
  products: IProduct[] = [];
  displayedColumns: string[] = [
    'imageUrl',
    'productId',
    'productName',
    'productCode',
    'starRating',
    'price',
    'quantity',
  ];

  // length = 50;
  // pageSize = 5;
  // pageSizeOptions = [5, 10, 25];
  // listFilter: string = 'cart';

  // private _listFilter: string = '';
  // get listFilter(): string {
  //   return this._listFilter;
  // }
  // set listFilter(value: string) {
  //   this._listFilter = value;
  //   console.log('setter', value);
  //   this.filteredProducts = this.performFilter(value);
  // }

  // performFilter(filterBy: string): IProduct[] {
  //   filterBy = filterBy.toLocaleLowerCase();
  //   return this.products.filter((product: IProduct) =>
  //     product.productName.toLocaleLowerCase().includes(filterBy)
  //   );
  // }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(event);
  }

  showImage(id: number) {
    this.products.find((product: IProduct) => {
      if (product.productId === id) {
        product.show = !product.show;
      }
    });
  }
  getImage() {
    this.image = !this.image;
  }

  ngOnInit(): void {
    this.sub = this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.filteredProducts = this.products;
        this.dataSource = new MatTableDataSource(this.products);
        this.dataSource.paginator = this.paginator;
      },
      error: (err) => (this.errorMessage = err),
    });
  }
  onRatingClicked(message: string): void {
    this.title = 'Product List ' + message;
  }
  addToCart(data: IProduct) {
    console.log(data);
    data.quantity = +data.quantity + 1;
    this.productService.getUser(data);
    this.user = this.productService.allUser();
    alert('You added a product');
    this.productService.getUser(data);
  }
}
