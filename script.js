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

let book0 = new Book("Dan Brown", "The Da Vinci Code", 359, "Yes");
let book1 = new Book("Khaled Hosseini", "The Kite Runner", 371, "Yes");

function addBookToLibrary(book) {
	myLibrary.push(book);
}

addBookToLibrary(book0);
addBookToLibrary(book1);

// console.log(myLibrary);

let table = document.querySelector("tbody");

let inputs = document.querySelectorAll("input");

function displayBookOnPage() {
	for (book of myLibrary) {
		let row = table.insertRow();

		for (value of Object.values(book)) {
			let cell = row.insertCell();
			let text = document.createTextNode(String(value));
			cell.appendChild(text);
		}
	}
}

displayBookOnPage();

let button = document.querySelector("form button");

button.addEventListener("click", function () {
	let author = document.querySelector("#author").value;
	let title = document.querySelector("#title").value;
	let pages = document.querySelector("#pages").value;
	let read = document.querySelector("[name=read]").value;

	let book = new Book(author, title, pages, read);

	addBookToLibrary(book);

	displayBookOnPage();
})
