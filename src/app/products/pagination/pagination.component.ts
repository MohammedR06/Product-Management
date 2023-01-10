import { Component, Input } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent {
  // constructor(pageEvent: PageEvent) {}
  @Input() length!: number;
  @Input() pageSize!: number;
  @Input() pageSizeOptions!: number[];
  pageEvent!: PageEvent;

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
  }
}
