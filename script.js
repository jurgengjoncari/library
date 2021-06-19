let myLibrary = [];

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.info = function () {
		return `${this.title} by ${this.author}, ${this.pages} pages, ${			this.read}`;
	}
}

function addBookToLibrary() {
	book = prompt();
	myLibrary.append(book);
}

function displayBookOnPage() {
	for (book of myLibrary) {
		// display it in a table?? or their own card??
	}
}

