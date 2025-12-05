import { Component, OnInit, inject } from '@angular/core';
import { Book } from '../book';
import { BookCardComponent } from '../book-card/book-card.component';
import { BookFilterPipe } from '../book-filter/book-filter.pipe';
import { BookApiService } from '../book-api.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-book',
  imports: [BookCardComponent, BookFilterPipe],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent implements OnInit {
  private readonly bookApi = inject(BookApiService);
  readonly books$ = this.bookApi.getAll$().pipe(takeUntilDestroyed());

  books: Book[] = [];
  bookSearchTerm = '';

  ngOnInit() {
    this.books$.subscribe({
      next: (books: Book[]) => (this.books = books),
      error: err => {
        if (err instanceof Error) {
          console.error(err.message);
        }
      }
    });
  }

  protected goToBookDetails(book: Book) {
    console.log('Navigate to book details');
    console.table(book);
  }

  protected updateBookSearchTerm(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.bookSearchTerm = inputElement.value;
  }
}
