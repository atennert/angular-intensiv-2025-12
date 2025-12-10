import { FormControl } from '@angular/forms';

export interface BookForm {
  title: FormControl<string>;
  subtitle: FormControl<string>;
  author: FormControl<string>;
  abstract: FormControl<string>;
  isbn: FormControl<string>;
}
