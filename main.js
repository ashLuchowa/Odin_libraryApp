const libraryContainer = document.querySelector(".library-container");
const addBtn = document.querySelector(".add-btn");

//All book stored here
let myLibrary = ["Book1", "Book2"];

// function book() {
//   //the constructor
// }

// function addBookToLibrary() {
//   //input book data here
// }

console.log(myLibrary);

addBtn.addEventListener("click", () => {
  myLibrary.push("book");
  console.log(myLibrary);
});
