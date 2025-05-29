const myLibrary = [];

// This was the old version before changing to the class underneath
/* function Book (title, author, pages, read = false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
} */

    //Below is the class version, very similar to previous version but allows methods to be contained within (like toggleRead)
class Book {
  constructor(title, author, pages, read = false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
  }

  toggleRead() {
    this.read = !this.read;
    displayBooks();
  }
}

function addBookToLibrary (title, author, pages, read = false) {
    const newBook = new Book(title, author, pages, read); //create newBook with parameters
    myLibrary.push(newBook); //store book in myLibrary array
}

addBookToLibrary('The Hobbit', 'JRR Tolkien', 500);
addBookToLibrary("Dune", "Frank Herbert", 412);
addBookToLibrary("1984", "George Orwell", 328);

console.log(myLibrary);

function displayBooks (){
    const container = document.getElementById('book-container');
    container.innerHTML='';

    myLibrary.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        bookCard.innerHTML =`
        <h2>${book.title}</h2>
        <p>${book.author}</p>
        <p>${book.pages}</p>
        <p>${book.read}</p>
        <p>${book.id}</p>
        `;
        //add a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete book';
        deleteButton.onclick = () => deleteBook(book.id);
        bookCard.appendChild(deleteButton);

        //add toggle button
        const toggleButton = document.createElement('button');
        toggleButton.textContent = "read/unread toggle";
        toggleButton.onclick= () => book.toggleRead();
        bookCard.appendChild(toggleButton);


        container.appendChild(bookCard);
    });
}

function deleteBook(bookId){
    console.log(bookId);
    const index = myLibrary.findIndex(book => book.id === bookId);
    if (index !== -1){
        myLibrary.splice(index, 1);
        displayBooks();
    }

}

//This is the old veersion for toggleRead before refactoring to use class above
/*Book.prototype.toggleRead = function () {
   this.read = !this.read;
    displayBooks();
};*/


function handleAddBook() {
    event.preventDefault(); // Prevent form submission
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").value;
    console.log("click"+`this is the title:${read}`);
    addBookToLibrary (title, author, pages, read);
    displayBooks();
      };

displayBooks();
