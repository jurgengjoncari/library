let myLibrary = [];

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.info = function () {
		return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
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

let button = document.querySelector("button");
// button.addEventListener("click", function () {
	let table = document.querySelector("tbody"); 
	
	let row = table.insertRow();

	let inputs = document.querySelectorAll("input");

	for (input of inputs) {
		input.addEventListener("click", function () {
			let cell = row.insertCell();

			let answer = document.createTextNode(input.value);
			cell.appendChild(answer);
		})
	}
