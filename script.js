let myLibrary = [];

let index = 0;

function Book(title, author, pages, read) {
	this.title = title
	this.author = author
	this.pages = pages
	this.read = read
}

function addToLibrary(book) {
	myLibrary.push(book);

	index++;
}

// DISPLAY ROW ON PAGE
let table = document.querySelector("tbody");

function displayBookOnPage() {
	let newBook = myLibrary.at(-1)

	let newRow = table.insertRow();

	newRow.setAttribute("data-index", String(index));

	for (const property in newBook) {
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

	removeButton.setAttribute("data-index", index);

	removeButton.addEventListener("click", function () {
		myLibrary.filter(function (book) {
			book.index = index;
		})

		newRow.remove();
	})

	cell.appendChild(removeButton);
}

//ADD SOME DATA MANUALLY
let book0 = new Book("Dan Brown", "The Da Vinci Code", 359, "Yes");
addToLibrary(book0);
displayBookOnPage();

let book1 = new Book("Khaled Hosseini", "The Kite Runner", 371, "Yes");
addToLibrary(book1);
displayBookOnPage();

let book2 = new Book("Carl Jung", "Psychological Types", 100, "Yes");
addToLibrary(book2);
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

	addToLibrary(book);

	displayBookOnPage();
})
