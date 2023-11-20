const books = [
    ['1', 'Start with why', 'Simon Sinek', 80.0, 13],
    ['2', 'But how do it know', 'J. Clark Scott', 59.9, 22],
    ['3', 'Clean Code', 'Robert Cecil Martin', 50.0, 5],
    ['4', 'Zero to One', 'Peter Thiel', 45.0, 12],
    ['5', 'You don\'t know JS', 'Kyle Simpson', 39.9, 9]
  ];
  
  // Function to add a new book to the bookstore
  function addBook(book) {
    books.push(book);
  }
  
  // Function to update a book's information
  function updateBook(bookId, updatedBook) {
    const index = findBookIndex(bookId);
    if (index !== -1) {
      books[index] = updatedBook;
    }
  }
  
  // Function to delete a book from the bookstore
  function deleteBook(bookId) {
    const index = findBookIndex(bookId);
    if (index !== -1) {
      books.splice(index, 1);
    }
  }
  
  function findBookIndex(bookId) {
    return books.findIndex(book => book[0] === bookId);
  }
  
  function displayBooks() {
    console.log('Bookstore Inventory:');
    console.log('ID\tTitle\t\t\tAuthor\t\tPrice\tQuantity');
    books.forEach(book => {
      console.log(`${book[0]}\t${book[1]}\t\t${book[2]}\t$${book[3]}\t${book[4]}`);
    });
  }
  
  function queryBook(searchTerm) {
    const matchingBooks = books.filter(book => {
      const [bookId, title, author] = book;
      return (
        bookId.includes(searchTerm) ||
        title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  
    if (matchingBooks.length > 0) {
      console.log('Matching Books:');
      console.log('ID\tTitle\t\t\tAuthor\t\tPrice\tQuantity');
      matchingBooks.forEach(book => {
        console.log(`${book[0]}\t${book[1]}\t\t${book[2]}\t$${book[3]}\t${book[4]}`);
      });
    } else {
      console.log('No matching books found.');
    }
  }
  
  function sellBooks(bookTitle, quantity, balance) {
    const book = books.find(book => book[1] === bookTitle);
    if (book) {
      const [bookId, title, author, price, stock] = book;
      if (stock >= quantity && balance >= price * quantity) {
        const totalPrice = price * quantity;
        const updatedStock = stock - quantity;
        book[4] = updatedStock;
        console.log('Invoice:');
        console.log('Book Title\tQuantity\tPrice\tTotal');
        console.log(`${title}\t\t${quantity}\t$${price}\t$${totalPrice}`);
      } else {
        console.log('Insufficient stock or balance.');
      }
    } else {
      console.log('Book not found.');
    }
  }
  
  addBook(['6', 'New Book', 'John Doe', 25.0, 10]); 
  updateBook('2', ['2', 'Updated Book', 'Jane Smith', 30.0, 5]); 
  deleteBook('3'); 
  displayBooks();
  queryBook('clean'); 
  sellBooks('Start with why', 2, 200);