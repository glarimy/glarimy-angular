import { Injectable } from '@angular/core';
import {Book, Publisher, Author} from './book';

@Injectable()
export class LibraryService {
  books: Book[];
  constructor() {
    const publisher: Publisher = new Publisher('GTS', 9731423166);
    const ng: Book = new Book(23101987, 'Angular Development', 125, true, publisher, [new Author('Krishna', 'krishna@glarimy.com')]);
    const js: Book = new Book(23101988, 'JavaScript Explored', 345, false, publisher, [new Author('Krishna', 'krishna@glarimy.com')]);
    const ts: Book = new Book(23101989, 'Playing with Typescript', 250, true, publisher, [new Author('Krishna', 'krishna@glarimy.com')]);
    ts.authors.push(new Author('Mohan', 'mohan@glarimy.com'));
    this.books = [ng, js, ts];
  }

  findBook(key: number): Book {
    return this.books.find(b => b.isbn == key);
  }

  list(): Book[] {
    return this.books;
  }
}
