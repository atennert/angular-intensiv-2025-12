import { Book } from './book';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { inject } from '@angular/core';
import { BookApiService } from './book-api.service';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { catchError, EMPTY, pipe, switchMap, tap } from 'rxjs';

interface BookState {
  books: Book[] | undefined;
  isLoading: boolean;
  error?: string;
}

const initialState: BookState = {
  books: undefined,
  isLoading: false,
  error: undefined
};

export const BookStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store, bookApi = inject(BookApiService)) => ({
    getAll: rxMethod<void>(
      pipe(
        tap(() => patchState(store, { isLoading: true })),
        switchMap(() =>
          bookApi.getAll$().pipe(tap(books => patchState(store, { books, isLoading: false })))
        ),
        catchError(err => {
          patchState(store, { isLoading: false });
          if (err instanceof Error) {
            console.log(err.message);
            patchState(store, { error: err.message });
          }
          return EMPTY;
        })
      )
    )
  }))
);
