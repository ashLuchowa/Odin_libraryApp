const addBtn = document.querySelector(".add-btn");
const closeBtn = document.querySelector("#form-close");
const libraryContainer = document.querySelector(".library-container");
const mainForm = document.querySelector(".main-form");
const formTitle = document.querySelector("#title");
const bookImage = document.getElementById("chooseImage");

//Store all books here
let myLibrary = [
  {
    title: "The Intelligent Investor",
    author: "Benjamin Graham",
    pages: 623,
    read: "Yes",
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
mainForm.addEventListener("submit", addBookToLibrary);

//Input form info
function addBookToLibrary(event) {
  event.preventDefault();
  myLibrary.push(new book(title.value, author.value, pages.value, read.value));
  console.table(myLibrary);
  createBox();
  mainForm.reset();
  mainForm.style.display = "none";
}

//Display input Value
addBtn.addEventListener("click", () => {
  mainForm.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  mainForm.style.display = "none";
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
  const delCard = document.createElement("span");
  const bookImage = document.createElement("img");

  //card divs
  const leftCardDiv = document.createElement("div");
  const rightCardDiv = document.createElement("div");
  item.append(leftCardDiv);
  item.append(rightCardDiv);

  leftCardDiv.appendChild(bookImage);
  rightCardDiv.append(bookTitle);
  rightCardDiv.append(bookAuthor);
  rightCardDiv.append(bookPages);
  rightCardDiv.append(bookRead);
  rightCardDiv.append(delCard);
  rightCardDiv.classList.add("paraGap");

  for (let i = 0; i < myLibrary.length; i++) {
    bookTitle.textContent = `${myLibrary[i].title}`;
    bookAuthor.textContent = `Author: ${myLibrary[i].author}`;
    bookPages.textContent = `Pages: ${myLibrary[i].pages}`;
    bookRead.textContent = `Read: ${myLibrary[i].read}`;
    bookImage.setAttribute("src", "./img/trending001.png");
    bookImage.classList.add("titleImage");
    bookTitle.classList.add("bookTitle");
    delCard.textContent = "X";
    delCard.classList.add("cardClose");
  }

  //change Border Color
  for (let i = 0; i < myLibrary.length; i++) {
    const result = bookRead.textContent.split(":");
    if (result[1].includes("Not yet")) {
      item.classList.add("borderColor");
    }
  }
}

//Remove Book
libraryContainer.addEventListener("click", removeBook);

function removeBook(e) {
  if (e.target.classList.contains("cardClose")) {
    if (confirm("Are you sure?")) {
      const removeCard = e.target;
      removeCard.parentElement.parentElement.remove();
    }
  }
}
