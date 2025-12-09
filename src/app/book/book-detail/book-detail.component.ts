import { Component, inject, input } from '@angular/core';
import { BookApiService } from '../book-api.service';
import { catchError, Observable, of, switchMap } from 'rxjs';
import { Book } from '../book';
import { AsyncPipe } from '@angular/common';
import { toObservable } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-book-detail',
  imports: [AsyncPipe],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.scss'
})
export class BookDetailComponent {
  readonly bookApi = inject(BookApiService);
  readonly isbn = input.required<string>();

  readonly details$: Observable<Book | undefined> = toObservable(this.isbn).pipe(
    switchMap(isbn => this.bookApi.getBookByIsbn$(isbn)),
    catchError(err => {
      console.error(err);
      return of(undefined);
    })
  );
}
