const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(...args) {
  myLibrary.push(...args);
}

const bookOne = new Book('Test 1', 'Joe', 234, true);
const bookTwo = new Book('Test 2', 'Sam', 234, true);
const bookThree = new Book('Test 3', 'Leo', 234, true);

addBookToLibrary(bookOne, bookTwo, bookThree);

myLibrary.forEach((book, index) => {
  const bookList = document.getElementById('book-list');

  const ul = document.createElement('UL');
  ul.classList.add('book-details');
  ul.setAttribute('data-index', `${index}`);
  const li1 = document.createElement('LI');
  li1.classList.add('book-name');
  const li2 = document.createElement('LI');
  li2.classList.add('book-author');
  const li3 = document.createElement('LI');
  li3.classList.add('book-pages');
  const li4 = document.createElement('BUTTON');
  li4.classList.add('book-read');
  const deleteButton = document.createElement('BUTTON');
  deleteButton.classList.add('delete-btn');

  li1.innerText = `Title: ${book.title}`;
  li2.innerText = `Author: ${book.author}`;
  li3.innerText = `Pages: ${book.pages}`;
  li4.innerText = `Read: ${book.read}`;
  deleteButton.innerText = 'Delete Book';

  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  ul.appendChild(li4);
  ul.appendChild(deleteButton);

  bookList.appendChild(ul);
});

const form = document.querySelector('#new-book');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.querySelector('input[name="name"]').value;
  const author = form.querySelector('input[name="author"]').value;
  const pages = form.querySelector('input[name="pages"]').value;
  const read = form.querySelector('input[name="read"]').checked;

  if (name && author && pages) {
    const book = new Book(name, author, pages, read);
    addBookToLibrary(book);
    const bookList = document.getElementById('book-list');

    const bk = myLibrary.findIndex(el => el === book);

    const ul = document.createElement('UL');
    ul.classList.add('book-details');
    ul.setAttribute('data-index', `${bk}`);

    const li1 = document.createElement('LI');
    li1.classList.add('book-name');
    const li2 = document.createElement('LI');
    li2.classList.add('book-author');
    const li3 = document.createElement('LI');
    li3.classList.add('book-pages');
    const li4 = document.createElement('BUTTON');
    li4.classList.add('book-read');
    const deleteButton = document.createElement('BUTTON');
    deleteButton.classList.add('delete-btn');

    li1.innerText = `Title: ${name}`;
    li2.innerText = `Author: ${author}`;
    li3.innerText = `Pages: ${pages}`;
    li4.innerText = `Read: ${read}`;
    deleteButton.innerText = 'Delete Book';


    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);
    ul.appendChild(deleteButton);

    bookList.appendChild(ul);
  }
});

const booksEvent = document.querySelector('#book-list');

booksEvent.addEventListener('click', (e) => {
  if (e.target.className === 'delete-btn') {
    const ul = e.target.parentElement;
    ul.parentNode.removeChild(ul);
  }
});

booksEvent.addEventListener('click', (e) => {
  if (e.target.className === 'book-read') {
    const ifRead = e.target;
    const parentIndex = ifRead.parentElement.getAttribute('data-index');

    const parAttr = myLibrary[parentIndex];
    if (parAttr.read === true) {
      parAttr.read = false;
      ifRead.innerText = `Read: ${parAttr.read}`;
    } else if (parAttr.read === false) {
      parAttr.read = true;
      ifRead.innerText = `Read: ${parAttr.read}`;
    }
  }
});

function showForm() {
  let x = document.getElementById("new-book");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
};