const addBtn = document.querySelector(".add-btn");
const closeBtn = document.querySelector("#form-close");
const submitBtn = document.querySelector("#submit-btn");
const libraryContainer = document.querySelector(".library-container");
const mainForm = document.querySelector(".main-form");

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
submitBtn.addEventListener("click", addBookToLibrary);

function addBookToLibrary(e) {
  e.preventDefault();
  myLibrary.push(new book("lola", "Zack", 132, true));
  console.table(myLibrary);
  createBox();
}

//Get input Value
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

  const bookTitle = document.createElement("h1");
  const bookAuthor = document.createElement("h1");
  const bookPages = document.createElement("h1");
  const bookRead = document.createElement("h1");
  box.append(bookTitle);
  box.append(bookAuthor);
  box.append(bookPages);
  box.append(bookRead);

  for (let i = 0; i < myLibrary.length; i++) {
    bookTitle.textContent = `Title: ${myLibrary[i].title}`;
    bookAuthor.textContent = `Author: ${myLibrary[i].author}`;
    bookPages.textContent = `Pages: ${myLibrary[i].pages}`;
    bookRead.textContent = `Read: ${myLibrary[i].read}`;
  }
}

//Add book info
// function addBookInfo() {

// }
