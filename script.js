let myLibrary = [];

const btnNewBook = document.querySelector("#btnNewBook");

function Book(title, author, pages, progress) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.progress = progress;
	this.info = () => {
		console.log(`${title} by ${author}, ${pages} pages, ${progress}`);
		return `${title} by ${author}, ${pages} pages, ${progress}`;
	};
}

function addBookToLibrary() {
	btnNewBook.addEventListener("click", (e) => {
		const Books = new Book(
			(title = document.querySelector("#title").value),
			(author = document.querySelector("#author").value),
			(pages = document.querySelector("#pages").value),
			(progress = document.querySelector("#progress").value)
		);

		document.querySelector("form").reset();

		myLibrary.push(Books);

		e.preventDefault();
	});
}

addBookToLibrary();

console.log(myLibrary);
