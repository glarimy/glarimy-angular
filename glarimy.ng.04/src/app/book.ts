export class Book {
    isbn: number;
    title: string;
    price: number;
    publisher: Publisher;
    authors: Author[];
    constructor(isbn: number, title: string, price: number, reference: boolean, publisher: Publisher, authors: Author[]) {
        this.isbn = isbn;
        this.title = title;
        this.price = price;
        this.publisher = publisher;
        this.authors = authors;
    }
}

export class Author {
    name: string;
    email: string;
    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }
}

export class Publisher {
    name: string;
    phone: number;
    constructor(name: string, phone: number) {
        this.name = name;
        this.phone = phone;
    }
}