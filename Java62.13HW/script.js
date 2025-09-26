const library = [];


//isbn,title,author,year
let inputData = prompt('Enter book data (isbn, title, author, year) separated by commas:');
while (inputData) {
    // TODO add to library only if isbn is unique
    let inputDataSplit = inputData.split(',');

    if (inputDataSplit.length > 3) {
        let [isbn, title, author, year] = inputDataSplit.map(s => s.trim());

    if (findBook(library, isbn) === -1) {
        library.push(new Book(isbn, title, author, year));
        console.log("Book added successfully!");
    } else {
        console.log("Kniga s takim isbn yest");
    }
} else {
    console.log("Please use isbn,title,author,year");
}

inputData = prompt('Enter book data (isbn, title, author, year) separated by commas:');

}


printLibrary(library);


function printLibrary(library) {
    if (library.length === 0) {
        console.log("Library is empty.");
    } else {
        console.log("Library contents:");
        library.forEach(book => console.log(book.toString()));
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
