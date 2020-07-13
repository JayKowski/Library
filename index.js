let myLibrary = [];

function Book(title, author){
    this.title = title,
    this.author = author
};

function addBookToLibrary(...args){
    myLibrary.push(...args);
};

const bookOne = new Book("a thousand ways to die", "Sony Entertainment");
const bookTwo  = new Book("Robinson Crusoe", "Dont know the author");
const bookThree = new Book("Leaders of Tomorrow", "the comedian");

addBookToLibrary(bookOne, bookTwo, bookThree);
// console.log(myLibrary);
// console.log(bookOne.author);
// console.log(bookTwo.author)

const render = function(template, node){
    node.innerHTML = template;
}
// let list = document.querySelector('.books')
// let book = document.querySelector('.books .book')
// console.log(book.textContent += ` -- Author: ${myLibrary[1].author}`)

// myLibrary.forEach(function(book){
//     template = `<ul>
//                     <li>Title: ${book.title}</li>
//                     <li>Author: ${book.author}</li>
//                 </ul>`
//     render(template, document.querySelector('.wrapper .books'))
//     console.log(book.author)
// })

for(let i = 0; i < myLibrary.length; i++){
    template = `<ul>
                    <li>Title: ${myLibrary[i].title}</li>
                    <li>Author: ${myLibrary[i].author}</li>
                </ul>`
    render(template, document.querySelector('.wrapper .books'))
    console.log(myLibrary[i].author)
}

// let template = `<ul>
//                     <li>Title: ${book.title}</li>
//                     <li>Author: ${book.author}</li>
//                 </ul>`
// myLibrary.map(render(template, document.querySelector('.wrapper .books')))               
// for(let book in myLibrary){
   
//     render(template, document.querySelector('.wrapper .books'))
//     console.log(book.author)
// }
