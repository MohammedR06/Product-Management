import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}
  id!: number;
  user: any;
  title = 'Product Detail';
  products: IProduct[] | any = [];
  product!: IProduct | any;

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.title += ` : ${this.id}`;
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.product = this.filterProduct(this.products);
      },
    });
  }
  filterProduct(allProduct: IProduct[]): any {
    this.products = allProduct.filter((pro) => pro.productId === this.id);
    this.products = this.products[0];
  }
  onBack() {
    this.router.navigate(['/products']);
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
