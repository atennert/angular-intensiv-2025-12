import { Component } from '@angular/core';
import { BookCardComponent } from './book-card/book-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [BookCardComponent],
  styleUrl: './app.component.scss'
})
export class AppComponent {}
