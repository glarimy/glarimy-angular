import { Component } from '@angular/core';
import { Book, Publisher, Author } from './book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: 'Glarimy Online Library';
  books: Book[];
  constructor() {
    const publisher: Publisher = new Publisher('GTS', 9731423166);
    const ng: Book = new Book(23101987, 'Angular Development', 125, true, publisher, [new Author('Krishna', 'krishna@glarimy.com')]);
    const js: Book = new Book(23101988, 'JavaScript Explored', 345, false, publisher, [new Author('Krishna', 'krishna@glarimy.com')]);
    const ts: Book = new Book(23101989, 'Playing with Typescript', 250, true, publisher, [new Author('Krishna', 'krishna@glarimy.com')]);
    ts.authors.push(new Author('Mohan', 'mohan@glarimy.com'));
    this.books = [ng, js, ts];
  }

}
