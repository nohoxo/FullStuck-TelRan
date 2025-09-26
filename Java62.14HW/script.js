const library = [];


//isbn,title,author,year
let inputData = prompt('Enter book data (isbn, title, author, year) separated by commas:');
while (inputData) {
    const arr = inputData.split(',');
    if (findBook(library, arr[0]) === -1) {
        const book = new Book(arr[0], arr[1], arr[2], arr[3]);
        library.push(book);
    }
    inputData = prompt('Enter book data (isbn, title, author, year) separated by commas:');
}


printLibrary(library);


function printLibrary(library) {
    for (let i = 0; i < library.length; i++) {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(library[i]))
        result.appendChild(li);
    }
}


function findBook(library, isbn) {
    for (let i = 0; i < library.length; i++) {
        if (library[i].isbn === isbn) {
            return i;
        }
    }
    return -1;
}


function Book(isbn, title, author, year) {
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.year = +year;
    this.toString = function () {
        return `ISBN: ${this.isbn}, Title: ${this.title}, Author: ${this.author}, Year of publishing: ${this.year}`
    }
}
