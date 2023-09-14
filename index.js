"use strict";
let library = [];
const addBookBtn = document.getElementById("add-book-btn");
const modalBg = document.getElementById("modal-bg");
const bookFormContainer = document.getElementById("book-form-container");
const form = document.getElementById("book-form");
const closeModal = document.getElementById("close");

function book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

function close() {
    modalBg.style.visibility = "hidden";
    bookFormContainer.classList.remove("open-modal");
    form.reset();
};

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
    library.push(newBook);
    console.log(newBook);
    close();
});



