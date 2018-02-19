import { Component } from '@angular/core';
import { Book, Publisher, Author } from './book';
import { LibraryService } from './library.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: 'Glarimy Online Library';
  key: number;
  book: Book;
  searchResults = false;
  constructor(private libraryService: LibraryService) {
  }
  findBook(key: number) {
    this.book = this.libraryService.findBook(key);
    this.searchResults = true;
  }

  clear() {
    this.searchResults = false;
  }

}
