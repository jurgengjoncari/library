class Library {
	constructor() {
		this.booksList = []
		this.index = 0
	}

	add (book) {
		this.booksList.push(book)

		this.index++
	}

	remove (book) {
		this.booksList.filter((myBook) => myBook.index = book.index)
	}
}

let myLibrary = new Library;

class Book {
	constructor (title, author, pages, read) {
		this.title = title
		this.author = author
		this.pages = pages
		this.read = read
		this.index = myLibrary.index
	}

	get properties() {
		return ['author', 'title', 'pages', 'read']
	}
}

// DISPLAY ROW ON PAGE
let table = document.querySelector("tbody");

let thead = document.querySelector("thead")

function displayBookOnPage() {
	let newBook = myLibrary.booksList.at(-1)

	let newRow = table.insertRow();

	newRow.setAttribute("data-index", String(newBook.index));

	for (const property of newBook.properties) {
		let newCell = newRow.insertCell();

		let value = newBook[property];

		newCell.textContent = value

		if (value == Number(value)) {
			newCell.style.textAlign = "right";
		}
	}

	// ADD "REMOVE BOOK" ICON AND "REMOVE" FUNCTIONALITY TO THE ROW
	let cell = newRow.insertCell();

	let removeButton = document.createElement("button");

	removeButton.textContent = "X";

	removeButton.setAttribute("data-index", newBook.index);

	removeButton.addEventListener("click", function () {

		newRow.remove();
	})

	cell.appendChild(removeButton);
}

//ADD SOME DATA MANUALLY
import myBooks from './my-books.json' assert {type: "json"}

for (let book of myBooks) {
	
}

let book0 = new Book("Dan Brown", "The Da Vinci Code", 359, "Yes");
myLibrary.add(book0);
displayBookOnPage();
console.log(book0)

let book1 = new Book("Khaled Hosseini", "The Kite Runner", 371, "Yes");
myLibrary.add(book1);
displayBookOnPage();

let book2 = new Book("Carl Jung", "Psychological Types", 100, "Yes");
myLibrary.add(book2);
displayBookOnPage();

// DIALOG
let dialog = document.querySelector("dialog");

let newButton = document.querySelector("#new");

newButton.addEventListener("click", function () {
	dialog.showModal();
})

//FORM
let form = document.querySelector("form");

let addButton = form.add;

addButton.addEventListener("click", function () {
	let author = form.author.value;
	let title = form.title.value;
	let pages = form.pages.value;
	let read = form.read.value;

	let book = new Book(author, title, pages, read);

	myLibrary.add(book);

	displayBookOnPage();
})
