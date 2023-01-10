import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvertToSpacesPipe } from '../custompipes/convert-to-spaces.pipe';
import { StarComponent } from '../star/star.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { PaginationComponent } from './pagination/pagination.component';
import { MaterialModule } from '../material/material.module';
import { MatFormFieldControl } from '@angular/material/form-field';

@NgModule({
  declarations: [
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailsComponent,
    PaginationComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RouterModule.forChild([]),
  ],
})
export class ProductModule {}
