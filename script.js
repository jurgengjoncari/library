let myLibrary = [];

let index = 0;

function createBook(title, author, pages, read) {
	return {
		title: title,
		author: author,
		pages: pages,
		read: read,
		index: index,
	}
	// this.title = title;
	// this.author = author;
	// this.pages = pages;
	// this.read = read;
	// this.index = index;
	// this.info = function () {
	//	return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
	// }
}

function addBookToLibrary(book) {
	myLibrary.push(book);

	index++;
}

// DISPLAY ON PAGE
let table = document.querySelector("tbody");

function displayBookOnPage() {
	let last = myLibrary.length - 1;
	
	let book = myLibrary[last];

	let row = table.insertRow();

	row.setAttribute("data-index", String(index));

	for (let i = 0; i < 4; i++) {
		let cell = row.insertCell();

		let value = Object.values(book)[i];

		let text = document.createTextNode(String(value));

		cell.appendChild(text);

		if (value == Number(value)) {
			cell.style.textAlign = "right";
		}
	}

	let cell = row.insertCell();

	// REMOVE BOOK
	let removeButton = document.createElement("button");

	removeButton.textContent = "X";

	removeButton.setAttribute("data-index", index);

	removeButton.addEventListener("click", function () {
		myLibrary.filter(function (book) {
			book.index = index;
		})

		row.remove();
	})

	cell.appendChild(removeButton);
}

//ADD SOME DATA MANUALLY
let book0 = createBook("Dan Brown", "The Da Vinci Code", 359, "Yes");
addBookToLibrary(book0);
displayBookOnPage();

let book1 = createBook("Khaled Hosseini", "The Kite Runner", 371, "Yes");
addBookToLibrary(book1);
displayBookOnPage();

let book2 = createBook("Carl Jung", "Psychological Types", 100, "Yes");
addBookToLibrary(book2);
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

	let book = createBook(author, title, pages, read);

	addBookToLibrary(book);

	displayBookOnPage();
})
