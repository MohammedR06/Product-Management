import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent implements OnChanges {
  @Input() rating: number = 0;
  cropWidth = 75;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(): void {
    this.cropWidth = this.rating * 75 / 5;

  }

  onClick() {
    this.ratingClicked.emit(`this is ${this.rating} rating`);
  }
}
