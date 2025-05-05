const library = [];
let inputData = prompt('Enter book data separate by ";" (ISBN;title;author;year)');
while (inputData){
    const [isbn, title, author, year] = inputData.split(';');

    if (isbn && title && author && year) {
        if (findBook(library, isbn) === -1) {
            library.push(new Book(isbn, title, author, year));
            console.log("Book added!")
            console.log(library[library.length - 1].toString());
        } else {
            console.log("Book not a uniq!")
        }
    } else {
        console.log('Please enter all info!')
    }
    inputData = prompt('Enter book data separate by ";" (ISBN;title;author;year)');
}

printLibrary(library);


function printLibrary(library){
    console.log('---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----')
    console.log('LIBRARY')

    if (library.length === 0){
        console.log('No books added!')
    } else {
        library.forEach(book => console.log(book.toString()))
    }
}

function findBook(library, isbn) {
    return library.findIndex(book => book.isbn === isbn.trim());
}

function Book(isbn, title, author, year) {
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.year = +year;
    this.toString = function () {
        return `ISBN: ${this.isbn}, Title: ${this.title}, Author: ${this.author}, Year of publishing: ${this.year}`;
    }
}