import { Component, effect, inject, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookCardComponent } from '../book-card/book-card.component';
import { BookFilterPipe } from '../book-filter/book-filter.pipe';
import { RouterLink } from '@angular/router';
import { BookStore } from '../book.store';

@Component({
  selector: 'app-book',
  imports: [BookCardComponent, BookFilterPipe, RouterLink],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent implements OnInit {
  private readonly bookStore = inject(BookStore);

  readonly books = this.bookStore.books;
  readonly isLoading = this.bookStore.isLoading;
  bookSearchTerm = '';

  ngOnInit(): void {
    this.bookStore.getAll();
  }

  private readonly logBookCount = effect(() => {
    const books = this.books();
    if (books) {
      console.log(`Total books loaded: ${books.length}`);
    }
  });

  protected goToBookDetails(book: Book) {
    console.log('Navigate to book details');
    console.table(book);
  }

  protected updateBookSearchTerm(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.bookSearchTerm = inputElement.value;
  }
}
