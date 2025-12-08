import { Component, inject } from '@angular/core';
import { Book } from '../book';
import { BookCardComponent } from '../book-card/book-card.component';
import { BookFilterPipe } from '../book-filter/book-filter.pipe';
import { BookApiService } from '../book-api.service';
import { catchError, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-book',
  imports: [BookCardComponent, BookFilterPipe, AsyncPipe],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {
  private readonly bookApi = inject(BookApiService);
  readonly books$ = this.bookApi.getAll$().pipe(
    catchError(err => {
      if (err instanceof Error) {
        console.error(err.message);
      }
      return of([] as Book[]);
    })
  );
  bookSearchTerm = '';

  protected goToBookDetails(book: Book) {
    console.log('Navigate to book details');
    console.table(book);
  }

  protected updateBookSearchTerm(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.bookSearchTerm = inputElement.value;
  }
}
