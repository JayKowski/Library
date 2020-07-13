let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
};

function addBookToLibrary(...args){
    myLibrary.push(...args);
};

const form = document.querySelector('#new-book');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const name = form.querySelector('input[name="name"]').value;
    const author = form.querySelector('input[name="author"]').value;
    const pages = form.querySelector('input[name="pages"]').value;
    const read = form.querySelector('input[name="read"]').checked;
    btn.addEventListener("click", function () {
        div.removeChild(document.getElementById(btn.id));
        div.removeChild(btn);
    });

    if (name && author && pages){
        var book = new Book(name, author, pages, read)
        addBookToLibrary(book)
        document.getElementById('book-list').innerHTML = myLibrary.map(book =>
            `<div>
                <div>Title: ${book.title}</div>
                <div>Author: ${book.author}</div>
                <div>Pages: ${book.pages}</div>
                <div>Read: ${book.read}</div>
            </div><br>`
        ).join('')
        console.log("success, all fields available")
    } else {
        console.log("not all fields are checked")
    }
})