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

const bookOne = new Book("Test 1", "Joe", 234, true);
const bookTwo = new Book("Test 2", "Sam", 234, true);
const bookThree = new Book("Test 3", "Leo", 234, true);

addBookToLibrary(bookOne, bookTwo, bookThree);

myLibrary.forEach(function (book) {
    const bookList = document.getElementById('book-list')

    let ul = document.createElement('UL')
    ul.classList.add('book-details')

    let li1 = document.createElement('LI')
    li1.classList.add('book-name')
    let li2 = document.createElement('LI')
    li2.classList.add('book-author')
    let li3 = document.createElement('LI')
    li3.classList.add('book-pages')
    let li4 = document.createElement('BUTTON')
    li4.classList.add('book-read')
    let deleteButton = document.createElement('BUTTON')
    deleteButton.classList.add('delete-btn')

    li1.innerText = `Title: ${book.title}`
    li2.innerText = `Author: ${book.author}`
    li3.innerText = `Pages: ${book.pages}`
    li4.innerText = `Read: ${book.read}`
    deleteButton.innerText = `Delete Book`

    ul.appendChild(li1)
    ul.appendChild(li2)
    ul.appendChild(li3)
    ul.appendChild(li4)
    ul.appendChild(deleteButton)

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
        ul.classList.add('book-details')

        let li1 = document.createElement('LI')
        li1.classList.add('book-name')
        let li2 = document.createElement('LI')
        li2.classList.add('book-author')
        let li3 = document.createElement('LI')
        li3.classList.add('book-pages')
        let li4 = document.createElement('BUTTON')
        li4.classList.add('book-read')
        let deleteButton = document.createElement('BUTTON')
        deleteButton.classList.add('delete-btn')

        li1.innerText = `Title: ${name}`
        li2.innerText = `Author: ${author}`
        li3.innerText = `Pages: ${pages}`
        li4.innerText = `Read: ${read}`
        deleteButton.innerText = `Delete Book`


        ul.appendChild(li1)
        ul.appendChild(li2)
        ul.appendChild(li3)
        ul.appendChild(li4)
        ul.appendChild(deleteButton)

        bookList.appendChild(ul)
        console.log(read);
        alert("success, all fields available")
    } else {
        alert("not all fields are checked")
    }

});

const booksEvent = document.querySelector('#book-list')

console.log(booksEvent)

booksEvent.addEventListener('click', (e) => {
    if(e.target.className == 'delete-btn') {
        const ul = e.target.parentElement;
        ul.parentNode.removeChild(ul);
    }
});

booksEvent.addEventListener('click', (e) => {
    if(e.target.className == 'book-read') {
        const status = e.target;
        console.log(status);
        if (status.innerText == 'Read: true') {
            status.innerText = 'Read: false'
        } else if (status.innerText == 'Read: false') {
            status.innerText = 'Read: true'
        }
    }
});