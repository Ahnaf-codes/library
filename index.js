"use strict";
let library = [];
const addBookBtn = document.getElementById("add-book-btn");
const modalBg = document.getElementById("modal-bg");
const bookFormContainer = document.getElementById("book-form-container");
const form = document.getElementById("book-form");
const errorMsg = document.getElementById("error");
const closeModal = document.getElementById("close");
const bookGrid = document.getElementById("book-grid");

function book(title, author, pages, status) {
    this.title = title.toLowerCase();
    this.author = author.toLowerCase();
    this.pages = pages;
    this.status = status;
}

function close() {
    modalBg.style.visibility = "hidden";
    bookFormContainer.classList.remove("open-modal");
    form.reset();
};

function displayBook(book) {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookCard.classList.add("grid");
    bookCard.innerHTML = `<h3 class="book-title">${book.title}</h3>
    <p class="book-author">${book.author}</p>
    <p class="book-pages">${book.pages} pages</p>
    <p class="book-status">${book.status}</p>`;
    bookGrid.appendChild(bookCard);
}

addBookBtn.addEventListener("click", () => {
    modalBg.style.visibility = "visible";
    bookFormContainer.classList.add("open-modal");
});

closeModal.addEventListener("click", close);

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = document.getElementById("book-title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const status = document.getElementById("status").value;
    const newBook = new book(title, author, pages, status);

    if (library.some((obj) => obj.title === newBook.title)) {
        errorMsg.style.visibility = "visible";
        console.log(errorMsg);
    } else {
        library.push(newBook);
        displayBook(newBook);
        console.log(newBook);
        close();
    }


});



