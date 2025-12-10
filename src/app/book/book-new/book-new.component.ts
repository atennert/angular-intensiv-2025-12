import { Component, inject } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { BookForm } from '../book-form';

@Component({
  selector: 'app-book-new',
  imports: [ReactiveFormsModule],
  templateUrl: './book-new.component.html',
  styleUrl: './book-new.component.scss'
})
export class BookNewComponent {
  private readonly formBuilder = inject(NonNullableFormBuilder);

  form: FormGroup<BookForm> = this.formBuilder.group({
    isbn: ['', [Validators.required], []],
    author: ['', [Validators.required]],
    title: ['', [Validators.required]],
    subtitle: [''],
    abstract: ['']
  });

  protected submit() {
    console.log(this.form.value);
  }
}
