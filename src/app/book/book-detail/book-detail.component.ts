import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookApiService } from '../book-api.service';
import { catchError, Observable, of, switchMap } from 'rxjs';
import { Book } from '../book';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-book-detail',
  imports: [AsyncPipe],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.scss'
})
export class BookDetailComponent {
  readonly route = inject(ActivatedRoute);
  readonly bookApi = inject(BookApiService);

  readonly details$: Observable<Book | undefined> = this.route.params.pipe(
    switchMap(params => this.bookApi.getBookByIsbn$(params['isbn'])),
    catchError(err => {
      console.error(err);
      return of(undefined);
    })
  );
}
