const addBtn = document.querySelector(".add-btn");
const closeBtn = document.querySelector("#form-close");
const libraryContainer = document.querySelector(".library-container");
const mainForm = document.querySelector(".main-form");
const bookImage = document.getElementById("chooseImage");

//Store all books here
let myLibrary = [];

//Constructor
function book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

//Submit Book
mainForm.addEventListener("submit", addBookToLibrary);

//Input form info
function addBookToLibrary(event) {
  event.preventDefault();
  myLibrary.push(new book(title.value, author.value, pages.value, read.value));
  console.table(myLibrary);
  createBox();
}

//Display input Value
addBtn.addEventListener("click", () => {
  mainForm.style.visibility = "visible";
});

closeBtn.addEventListener("click", () => {
  mainForm.style.visibility = "hidden";
});

//Loop through array
for (let i = 0; i < myLibrary.length; i++) {
  createBox();
}

//create a new box
function createBox() {
  const box = document.createElement("div");
  box.classList.add("card");
  libraryContainer.append(box);
  addBookInfo(box);
}

//Add book info
function addBookInfo(item) {
  const bookTitle = document.createElement("h1");
  const bookAuthor = document.createElement("p");
  const bookPages = document.createElement("p");
  const bookRead = document.createElement("p");
  const bookImage = document.createElement("img");

  item.append(bookImage);
  item.append(bookTitle);
  item.append(bookAuthor);
  item.append(bookPages);
  item.append(bookRead);
  item.classList.add("paraGap");

  for (let i = 0; i < myLibrary.length; i++) {
    bookTitle.textContent = `Title: ${myLibrary[i].title}`;
    bookAuthor.textContent = `Author: ${myLibrary[i].author}`;
    bookPages.textContent = `Pages: ${myLibrary[i].pages}`;
    bookRead.textContent = `Read: ${myLibrary[i].read}`;
    bookImage.setAttribute("src", "./img/trending001.png");
    bookImage.classList.add("titleImage");
    bookTitle.classList.add("bookTitle");
  }
}
