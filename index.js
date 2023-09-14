"use strict";
let library = [];
const addBookBtn = document.getElementById("add-book-btn");
const modalBg = document.getElementById("modal-bg");
const bookFormContainer = document.getElementById("book-form-container");
const form = document.getElementById("book-form");
const closeModal = document.getElementById("close");


addBookBtn.addEventListener("click", () => {
    modalBg.style.visibility = "visible";
    bookFormContainer.classList.add("open-modal");
});

closeModal.addEventListener("click", () => {
    modalBg.style.visibility = "hidden";
    bookFormContainer.classList.remove("open-modal");
    form.reset();
});

function book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}