import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const Material = [
  MatPaginatorModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
];

@NgModule({
  imports: [Material],
  exports: [Material],
})
export class MaterialModule {}
