import { Component, effect, inject } from '@angular/core';
import { Book } from '../book';
import { BookCardComponent } from '../book-card/book-card.component';
import { BookFilterPipe } from '../book-filter/book-filter.pipe';
import { BookApiService } from '../book-api.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-book',
  imports: [BookCardComponent, BookFilterPipe],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {
  private readonly bookApi = inject(BookApiService);
  private readonly books$ = this.bookApi.getAll$().pipe(
    catchError(err => {
      if (err instanceof Error) {
        console.error(err.message);
      }
      return of([] as Book[]);
    })
  );
  readonly books = toSignal(this.books$, { initialValue: [] });
  bookSearchTerm = '';

  private readonly logBookCount = effect(() => {
    console.log(`Total books loaded: ${this.books().length}`);
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
