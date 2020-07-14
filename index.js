let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title,
        this.author = author,
        this.pages = pages,
        this.read = read
};

function addBookToLibrary(...args) {
    myLibrary.push(...args);
};

const bookOne = new Book("a thousand ways to die", "Sony Entertainment", 234, true);
const bookTwo = new Book("Robinson Crusoe", "Dont know the author", 234, true);
const bookThree = new Book("Leaders of Tomorrow", "the comedian", 234, true);

addBookToLibrary(bookOne, bookTwo, bookThree);

const bookList = document.querySelector("#book-list")


myLibrary.forEach(function (book) {
    const bookList = document.getElementById('book-list')

    let ul = document.createElement('UL')

    let li1 = document.createElement('LI')
    let li2 = document.createElement('LI')
    let li3 = document.createElement('LI')
    let li4 = document.createElement('LI')

    li1.innerText = `Title: ${book.title}`
    li2.innerText = `Author: ${book.author}`
    li3.innerText = `Pages: ${book.pages}`
    li4.innerText = `Read: ${book.read}`

    ul.appendChild(li1)
    ul.appendChild(li2)
    ul.appendChild(li3)
    ul.appendChild(li4)

    bookList.appendChild(ul)

});

const form = document.querySelector('#new-book');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = form.querySelector('input[name="name"]').value;
    const author = form.querySelector('input[name="author"]').value;
    const pages = form.querySelector('input[name="pages"]').value;
    const read = form.querySelector('input[name="read"]').checked;

    if (name && author && pages) {
        var book = new Book(name, author, pages, read)
        addBookToLibrary(book)
        const bookList = document.getElementById('book-list')

        let ul = document.createElement('UL')

        let li1 = document.createElement('LI')
        let li2 = document.createElement('LI')
        let li3 = document.createElement('LI')
        let li4 = document.createElement('LI')

        li1.innerText = `Title: ${book.title}`
        li2.innerText = `Author: ${book.author}`
        li3.innerText = `Pages: ${book.pages}`
        li4.innerText = `Read: ${book.read}`

        ul.appendChild(li1)
        ul.appendChild(li2)
        ul.appendChild(li3)
        ul.appendChild(li4)

        bookList.appendChild(ul)

        console.log("success, all fields available")
    } else {
        console.log("not all fields are checked")
    }


});