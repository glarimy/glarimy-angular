import { Component } from '@angular/core';
import { Book, Publisher, Author } from './book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: 'Glarimy Online Library';
  publisher: Publisher = new Publisher('GTS', 9731423166);
  authors: Author[] = [new Author('Krishna', 'gts@glarimy.com')];
  book: Book = new Book(23101987, 'Angular Development', 125, true, this.publisher, this.authors);
}
