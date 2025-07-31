// Create an array of book objects where each book has:

// { title: "Book Name", author: "Author Name", isAvailable: true }

// Write functions to:
//     List all books.
//     Mark a book as borrowed (isAvailable = false).
//     Return a book (isAvailable = true).
//     Find books by a specific author.

const books = [
  { title: "Book1", author: "Author1", isAvailable: true },
  { title: "Book2", author: "Author2", isAvailable: true },
  { title: "Book3", author: "Author3", isAvailable: true },
  { title: "Book4", author: "Author4", isAvailable: true },
  { title: "Book5", author: "Author5", isAvailable: true },
  { title: "Book6", author: "Author1", isAvailable: true },
  { title: "Book7", author: "Author1", isAvailable: true },
];

function listBooks() {
  return books;
}

function markAsBorrowed(title) {
  for (let book of books) {
    if (book.title == title) {
      if (book.isAvailable == true) {
        book.isAvailable = false;
        return book;
      }
    }
  }

  return "Book Not Found";
}

function returnBook(title) {
  for (let book of books) {
    if (book.title == title) {
      if (book.isAvailable == false) {
        book.isAvailable = true;
        return book;
      }
    }
  }

  return "Book Not Found";
}

function findBooksByAuthor(author) {
  const authoredbooks = [];
  for (let book of books) {
    if (book.author == author) {
      authoredbooks.push(book);
    }
  }
  return authoredbooks;
}

console.log(listBooks());
console.log(markAsBorrowed("Book1"));
console.log(returnBook("Book1"));
console.log(findBooksByAuthor("Author1"));
