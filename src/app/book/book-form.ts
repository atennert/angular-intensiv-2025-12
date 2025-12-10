import { FormArray, FormControl } from '@angular/forms';

export interface BookForm {
  title: FormControl<string>;
  subtitle: FormControl<string>;
  authors: FormArray<FormControl<string>>;
  abstract: FormControl<string>;
  isbn: FormControl<string>;
}
