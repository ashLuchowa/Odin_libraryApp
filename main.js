const addBtn = document.querySelector(".add-btn");

//Store all books here
let myLibrary = [];

//Constructor
function book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

//Individual book
const book1 = new book("kong", "sinoi", 244, true);

//Add button
addBtn.addEventListener("click", () => {
  myLibrary.push(book1);
  console.log(myLibrary);
});
