class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    return this.state = this.state * 1.5;
  }

  set state(num) {
    if (num <= 0) {
      this._state = 0;
    } else if (num > 100) {
      this._state = 100;
    } else {
      this._state = num;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, author) {
    super(name, releaseDate, pagesCount);
    this.type = 'magazine';
    this.author = author;
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = 'book';
    this.author = author;
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'detective';
  }
}

//Задача 2
class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    let thatBook = this.books.find(key => key[type] === value);

    return thatBook ?? null;
  }

  giveBookByName(bookName) {
    let thatBook = this.books.find(key => key.name === bookName);
    //let pos = this.books.findIndex(key => key.name == bookName); // или так, для лучшей читаемости (pos первым арг. в findIndex)
    
    if (thatBook != undefined) {
      this.books.splice(this.books.findIndex(key => key.name === bookName), 1);
      return thatBook;
    }
    else {
      return null;
    }
  }

}