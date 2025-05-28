const library = [];

addBook.onclick = (e) => {
    if (library.findIndex(b => b.isbn === isbn.value) === -1) {
        const book = new Book(isbn.value, title.value, author.value, year.value);
        library.push(book);
        const li = createInfoElement(book.toString(), 'li');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete';
        deleteButton.style.marginLeft = '15px';
        deleteButton.onclick = () => {
            const index = library.findIndex(b => b.isbn === book.isbn);
            if (index !== -1) {
                library.splice(index, 1);
                li.remove();
                showStats();
            }
        }
        li.appendChild(deleteButton);
        result.append(li);
        showStats();
    } else {
        alert(`Book with isbn = ${isbn.value} exists`);
    }
    isbn.value = title.value = author.value = year.value = '';
}

function showStats() {
    const divStats = document.createElement('div')
    if (library.length) {
        let year = library.reduce((min, b) => b.year < min ? b.year : min, library[0].year);
        const h3min = createInfoElement(`Min year: ${year}`, 'h3');
        year = library.reduce((max, b) => b.year > max ? b.year : max, library[0].year);
        const h3max = createInfoElement(`Max year: ${year}`, 'h3');
        const total = createInfoElement(`Total books ${library.length}`, 'h3');
        divStats.append(total, h3min, h3max);
    }
    if (stats.firstElementChild.nextElementSibling) {
        stats.replaceChild(divStats, stats.firstElementChild.nextElementSibling);
    } else {
        stats.appendChild(divStats);
    }
}

function Book(isbn, title = "Title", author = "Unknown", year = 1970) {
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.year = +year;
    this.toString = function () {
        return `ISBN: ${this.isbn}, Title: ${this.title}, Author: ${this.author}, Year of publishing: ${this.year}`;
    }
}