function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

//
// const book1 = new Book('Harry Potter', 'J.K Rolling', 339, true);
const input1 = document.querySelector('#title')
const input2 = document.querySelector('#author')
const input3 = document.querySelector('#pages')

let myLibrary = [];

const btn = document.getElementById('btn');
const books = document.getElementById('books')

input1.focus()

btn.addEventListener('click', () => store(event));

function store(event) {
  event.preventDefault();
  const titleInput = document.querySelector('#title').value;
  const authorInput = document.querySelector('#author').value;
  const pagesInput = document.querySelector('#pages').value;
  const newBook = new Book(titleInput, authorInput, pagesInput);
  myLibrary.push(newBook)

  if(!input1.value || !input2.value || !input3.value ) {
    alert('빈칸을 모두 입력하세요')
  } else {
    const addingElement =   myLibrary[myLibrary.length - 1];

    books.innerHTML += `Title: <span class="givenTitle">${addingElement.title}</span> <br>
    Author:<span class="givenAuthor">${addingElement.author}</span> 저 <br>
    Pages: <span class="givenPages">${addingElement.pages}</span> 페이지 <br> <br> ` 

    input1.value = ''
    input2.value = ''
    input3.value = ''

    input1.focus()
  }

  
}


