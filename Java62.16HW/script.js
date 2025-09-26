const library = [];


//isbn,title,author,year
addBook.onclick = function () {
    if (findBook(library, isbn.value) === -1) {
        const book = new Book(isbn.value, title.value, author.value, year.value);
        library.push(book);
        const li = document.createElement('li');
        const buttonDel = document.createElement("button");
        // li.appendChild(document.createTextNode(book.toString()));
        buttonDel.append('delete'); 
        buttonDel.addEventListener('click', (e) => {
            li.remove();
            const index = findBook(library, book.isbn);
            if (index !== -1) {
                library.splice(index, 1);
            }
        })
        li.append(book.toString(), buttonDel);
        result.appendChild(li);
    } else {
        alert(`Book with isbn = ${isbn.value} exists`);
    }
    isbn.value = title.value = author.value = year.value = '';
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





// addItem.addEventListener('click', addListItem);
// item.addEventListener('keyup', e => {
//     if(e.key === 'Enter') {
//         addListItem();
//     }
// })
//
//
// function addListItem(){
//     const text = item.value.trim();
//     if(text) {
//         const li = document.createElement("li");
//         const buttonDel = document.createElement("button");
//         buttonDel.append('delete');
//         buttonDel.addEventListener('click', (e) => {
//             li.remove();
//         })
//         li.append(text, buttonDel);
//         todoList.append(li);
//     }
//     item.value = ''
// }
