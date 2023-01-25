let myLibrary = [];

const btnSubmit = document.querySelector("#button-submit");
const bookshelf = document.querySelector(".bookshelf");

function Book(title, author, pages, progress) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.progress = progress;
}

function addBookToLibrary() {
	btnSubmit.addEventListener("click", (e) => {
		const Books = new Book(
			document.querySelector("#title").value,
			document.querySelector("#author").value,
			document.querySelector("#pages").value
			// document.querySelector("#progress").value
		);

		myLibrary.push(Books);

		// reset
		document.querySelector("form").reset();
		resetShelf();

		console.log(myLibrary);

		e.preventDefault();
	});
}

addBookToLibrary();

function resetShelf() {
	while (bookshelf.firstChild) {
		bookshelf.removeChild(bookshelf.firstChild);
	}
}

// modal JS
const trigger = document.querySelector("#trigger");
const modal = document.querySelector("#modal");

function toggleModal() {
	modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
	if (event.target === modal) {
		toggleModal();
	}
}

trigger.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
//
