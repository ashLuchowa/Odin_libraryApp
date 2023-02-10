const addBtn = document.querySelector(".add-btn");
const closeBtn = document.querySelector("#form-close");
const libraryContainer = document.querySelector(".library-container");
const mainForm = document.querySelector(".main-form");
const box = document.createElement("div");
box.classList.add("card");

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
const booklet = new book("kong", "sinoi", 244, true);

//Get input Value
addBtn.addEventListener("click", () => {
  mainForm.style.visibility = "visible";
});

closeBtn.addEventListener("click", () => {
  mainForm.style.visibility = "hidden";
});
