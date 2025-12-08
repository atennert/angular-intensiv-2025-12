import { Component, OnInit, inject, OnDestroy } from '@angular/core';
import { Book } from '../book';
import { BookCardComponent } from '../book-card/book-card.component';
import { BookFilterPipe } from '../book-filter/book-filter.pipe';
import { BookApiService } from '../book-api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book',
  imports: [BookCardComponent, BookFilterPipe],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent implements OnInit, OnDestroy {
  private readonly bookApi = inject(BookApiService);
  readonly subscription = new Subscription();

  books: Book[] = [];
  bookSearchTerm = '';

  ngOnInit() {
    this.subscription.add(
      this.bookApi.getAll$().subscribe({
        next: (books: Book[]) => (this.books = books),
        error: err => {
          if (err instanceof Error) {
            console.error(err.message);
          }
        }
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
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
