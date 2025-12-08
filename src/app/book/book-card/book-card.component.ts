import { Component, computed, input, output } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-book-card',
  imports: [],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss'
})
export class BookCardComponent {
  customStyle = {
    color: 'red'
  };

  readonly content = input.required<Book>();
  readonly detailClick = output<Book>();

  readonly title = computed(() => this.content().title.toUpperCase());

  protected handleDetailClick() {
    this.detailClick.emit(this.content());
  }
}
