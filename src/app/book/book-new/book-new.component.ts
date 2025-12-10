import { Component, DestroyRef, inject } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { BookForm } from '../book-form';
import { BookApiService } from '../book-api.service';
import { Book } from '../book';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { validAuthorName } from '../author.validator';

@Component({
  selector: 'app-book-new',
  imports: [ReactiveFormsModule],
  templateUrl: './book-new.component.html',
  styleUrl: './book-new.component.scss'
})
export class BookNewComponent {
  private readonly bookApi = inject(BookApiService);
  private readonly formBuilder = inject(NonNullableFormBuilder);
  private readonly destroyRef = inject(DestroyRef);
  private readonly router = inject(Router);

  form: FormGroup<BookForm> = this.formBuilder.group({
    isbn: ['', [Validators.required], []],
    author: ['', [Validators.required, validAuthorName()]],
    title: ['', [Validators.required]],
    subtitle: [''],
    abstract: ['']
  });

  protected submit() {
    this.bookApi
      .create$(this.form.value as Book)
      .pipe(
        switchMap(book => this.router.navigate(['/books', 'detail', book.isbn])),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe();
  }
}
