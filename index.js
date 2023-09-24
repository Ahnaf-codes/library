"use strict";
let library = [];
let btnEventArr = [];
let readBooks = document.getElementById("read");
let unreadBooks = document.getElementById("unread");
let totalBooks = document.getElementById("total");
const addBookBtn = document.getElementById("add-book-btn");
const modalBg = document.getElementById("modal-bg");
const bookFormContainer = document.getElementById("book-form-container");
const form = document.getElementById("book-form");
const errorMsg = document.getElementById("error");
const closeModal = document.getElementById("close");
const bookGrid = document.getElementById("book-grid");
readBooks.textContent = 0;
unreadBooks.textContent = 0;
totalBooks.textContent = 0;


function book(title, author, pages, status) {
    this.title = title.toLowerCase();
    this.author = author.toLowerCase();
    this.pages = pages;
    this.status = status;
};

function close() {
    modalBg.style.visibility = "hidden";
    errorMsg.style.visibility = "hidden";
    bookFormContainer.classList.remove("open-modal");
    form.reset();
};

function displayBook(book) {
    const bookCard = document.createElement("div");
    bookCard.setAttribute("data-title", book.title);
    bookCard.classList.add("book-card");
    bookCard.classList.add("grid");
    bookCard.innerHTML = `<h3 class="book-title">${book.title}</h3>
    <p class="book-author">${book.author}</p>
    <p class="book-pages">${book.pages} pages</p>
    <button class="book-status btn">${book.status}</button>
    <button class="remove btn">Remove</button>`;
    bookGrid.appendChild(bookCard);
};

function toggleStatus() {
    const bookStatus = document.querySelectorAll(".book-status");
    bookStatus.forEach(btn => {
        if (!btnEventArr.includes(btn)) {
            btn.addEventListener('click', (e) => {
                console.log(e.target.parentNode.dataset.title);
                const title = e.target.parentNode.dataset.title;
                let i;
                library.forEach((book) => {
                    if (book.title === title) {
                        i = library.indexOf(book);
                    } else {
                        return;
                    }
                });
                if (btn.textContent === "Read") {
                    library[i].status = "Unread";
                    btn.textContent = "Unread";
                    unreadBooks.textContent++;
                    readBooks.textContent--;
                    console.log(readBooks);
                    console.log(unreadBooks);
                } else {
                    library[i].status = "Read";
                    btn.textContent = "Read";
                    unreadBooks.textContent--;
                    readBooks.textContent++;
                    console.log(readBooks);
                }
            });
            btnEventArr.push(btn);
        } else {
            return;
        }
    });
};

function removeBook() {
    const remove = document.querySelectorAll(".remove");
    remove.forEach((btn) => {
        if (!btnEventArr.includes(btn)) {
            btn.addEventListener("click", (e) => {
                const parent = e.target.parentNode;
                const title = e.target.parentNode.dataset.title;
                let i;
                library.forEach((book) => {

                    if (book.title === title) {
                        i = library.indexOf(book);
                        if (book.status === "Read") {
                            readBooks.textContent--;
                        } else {
                            unreadBooks.textContent--;
                        };
                    } else {
                        return;
                    }
                });
                library.splice(i, 1);
                parent.remove();
                console.log(title);
                console.log(i);
                totalBooks.textContent--;
            });
            btnEventArr.push(btn);
        } else {
            return;
        }
    });
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

    if (library.some((obj) => obj.title === newBook.title)) {
        errorMsg.style.visibility = "visible";
        console.log(errorMsg);
    } else {
        errorMsg.style.visibility = "hidden";
        library.push(newBook);
        displayBook(newBook);
        console.log(newBook);
        close();
        toggleStatus();
        removeBook();
        totalBooks.textContent++;
        if (status == "Read") {
            readBooks.textContent++;
        } else {
            unreadBooks.textContent++;
        }
    }
});
