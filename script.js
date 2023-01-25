let myLibrary = [];

const btnSubmit = document.querySelector("#button-submit");
const bookshelf = document.querySelector(".bookshelf");

function Book(title, author, pages, progress) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.progress = progress;
}

// default books
const Book1 = new Book("The Hobbit", "J. R. R. Tolkien", 310, "read");
const Book2 = new Book("Blood of Elves", "Andrzej Sapkowski", 320, "unread");
const Book3 = new Book("Don Quixote", "Miguel de Cervantes", 1077, "unread");

myLibrary.push(Book1, Book2, Book3);

function addBookToLibrary() {
	btnSubmit.addEventListener("click", (e) => {
		const Books = new Book(
			document.querySelector("#title").value,
			document.querySelector("#author").value,
			document.querySelector("#pages").value,
			document.querySelector("input[name='progress']:checked").value
		);
		myLibrary.push(Books);

		document.querySelector("form").reset();
		resetShelf();
		displayBooks();

		console.log(myLibrary);

		e.preventDefault();
	});
}

function resetShelf() {
	while (bookshelf.firstChild) {
		bookshelf.removeChild(bookshelf.firstChild);
	}
}

function displayBooks() {
	for (i = 0; i < myLibrary.length; i++) {
		console.log(myLibrary[i].title);
		initializeBook(
			myLibrary[i].title,
			myLibrary[i].author,
			myLibrary[i].pages,
			myLibrary[i].progress
		);
	}
}

// function to generate HTML elements
function initializeBook(title, author, pages, progress) {
	const bookBody = document.createElement("div");
	bookBody.classList.add("book-info");

	const bookTitle = document.createElement("span");
	bookTitle.textContent = `"${title}"`;

	const bookAuthor = document.createElement("span");
	bookAuthor.textContent = `writen by ${author}`;

	const bookPages = document.createElement("span");
	bookPages.textContent = `${pages} pages`;

	const btnStatus = document.createElement("button");
	if (progress == "read") {
		btnStatus.classList.add("read-book");
	}
	// add data-book-no attribute to buttons
	// used to remove object on myLibrary[${}]
	btnStatus.setAttribute("data-book-no", `${i}`);
	btnStatus.textContent = `${progress}`;

	const btnRemove = document.createElement("button");
	btnRemove.classList.add("red-button");
	btnRemove.setAttribute("data-book-no", `${i}`);

	btnRemove.textContent = "Remove";

	bookshelf.append(bookBody);
	bookBody.append(bookTitle, bookAuthor, bookPages, btnStatus, btnRemove);

	btnStatus.addEventListener("click", (e) => {
		btnStatus.classList.toggle("read-book");
		return btnStatus.textContent == "read"
			? (btnStatus.textContent = "unread")
			: (btnStatus.textContent = "read");
	});

	btnRemove.addEventListener("click", (e) => {
		console.log(e.target.dataset.bookNo);
		console.log(myLibrary.splice(e.target.dataset.bookNo, 1));

		resetShelf();
		displayBooks();
	});
}

displayBooks();
addBookToLibrary();

// modal script
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
btnSubmit.addEventListener("click", toggleModal);
