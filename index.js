let myLibrary = [];

function Book(title, author, numberOfPages, read){
    this.title = title,
    this.author = author,
    this.numberOfPages = numberOfPages,
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
    </div>`
).join('')


$("#addform").submit(function (e) {
    e.preventDefault();
    let book = new Book    ($("input[name = 'name']").val(),
                            $("input[name = 'author']").val(),
                            $("input[name = 'pages']").val(),
                            $("input[name = 'read']").val());
    list.push(book);
    console.log(list);
});