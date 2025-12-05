import { Component } from '@angular/core';
import { BookComponent } from './book/book/book.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [BookComponent],
  styleUrl: './app.component.scss'
})
export class AppComponent {}
