let myLibrary = [];

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	// this.info = function () {
	//	return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
	// }
}

function addBookToLibrary(book) {
	myLibrary.unshift(book);
}


let table = document.querySelector("tbody");

function displayBookOnPage() {
	let book = myLibrary[0];
	let row = table.insertRow(0);
	for (value of Object.values(book)) {
		let cell = row.insertCell();
		let text = document.createTextNode(String(value));
		cell.appendChild(text);
	}
}


let book0 = new Book("Dan Brown", "The Da Vinci Code", 359, "Yes");
addBookToLibrary(book0);
displayBookOnPage();

let book1 = new Book("Khaled Hosseini", "The Kite Runner", 371, "Yes");
addBookToLibrary(book1);
displayBookOnPage();


let dialog = document.querySelector("dialog");

let newButton = document.querySelector("#new");

newButton.addEventListener("click", function () {
	dialog.showModal();
})


let form = document.querySelector("form");

let addButton = form.add;

addButton.addEventListener("click", function () {
	let author = form.author.value;
	let title = form.title.value;
	let pages = form.pages.value;
	let read = form.read.value;

	let book = new Book(author, title, pages, read);

	addBookToLibrary(book);

	displayBookOnPage();
})
