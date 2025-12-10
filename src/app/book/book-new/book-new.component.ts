import { Component, DestroyRef, inject } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { BookForm } from '../book-form';
import { BookApiService } from '../book-api.service';
import { Book } from '../book';
import { Router } from '@angular/router';
import { validAuthorName } from '../author.validator';
import { switchMap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

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
    authors: this.formBuilder.array([['', [Validators.required, validAuthorName()]]]),
    title: ['', [Validators.required]],
    subtitle: [''],
    abstract: ['']
  });

  get authors(): BookForm['authors'] {
    return this.form.controls.authors;
  }

  addAuthor() {
    const author = this.formBuilder.control('', [Validators.required, validAuthorName()]);
    this.authors.controls.push(author);
  }

  deleteAuthor(index: number) {
    this.authors.removeAt(index);
  }

  protected submit() {
    const book = {
      ...this.form.value,
      author: this.authors.controls.map(c => c.value).join(', ')
    } as Book;
    this.bookApi
      .create$(book)
      .pipe(
        switchMap(book => this.router.navigate(['/books', 'detail', book.isbn])),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe();
  }
}
