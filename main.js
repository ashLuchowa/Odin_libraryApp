const addBtn = document.querySelector(".add-btn");
const closeBtn = document.querySelector("#form-close");
const submitBtn = document.querySelector("#submit-btn");
const libraryContainer = document.querySelector(".library-container");
const mainForm = document.querySelector(".main-form");

//Store all books here
let myLibrary = [
  {
    title: "Kong",
    author: "Tolkien",
    pages: 122,
    read: true,
  },
  {
    title: "Megaman",
    author: "Nouni",
    pages: 212,
    read: false,
  },
];

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
  const box = document.createElement("div");
  box.classList.add("card");
  libraryContainer.append(box);
}

console.table(myLibrary);
