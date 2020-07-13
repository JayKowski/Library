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

const bookOne = new Book("a thousand ways to die", "Sony Entertainment");
const bookTwo  = new Book("Robinson Crusoe", "Dont know the author");
const bookThree = new Book("Leaders of Tomorrow", "the comedian");

addBookToLibrary(bookOne, bookTwo, bookThree);

document.getElementById('book-list').innerHTML = myLibrary.map(book => 
    `<div>
      <div>Title: ${book.title}</div>
      <div>Author: ${book.author}</div>
      <div>Pages: ${book.pages}</div>
      <div>Read: ${book.read}</div>
    </div><br>`
).join('')


// $("#addform").submit(function (e) {
//     e.preventDefault();
//     let book = new Book    ($("input[name = 'name']").val(),
//                             $("input[name = 'author']").val(),
//                             $("input[name = 'pages']").val(),
//                             $("input[name = 'read']").val());
//     list.push(book);
//     console.log(list);
// });

function addBookToDOM(){
    let list = document.querySelector('#book-list');
    let title = document.createElement('p');
    let author = document.createElement('p');
    let pages = document.createElement('p')
    let read = document.createElement('p')
}

const form = document.querySelector('#new-book');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const name = form.querySelector('input[name="name"]').value;
    const author = form.querySelector('input[name="author"]').value;
    const pages = form.querySelector('input[name="pages"]').value;
    const read = form.querySelector('input[name="read"]').checked;

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