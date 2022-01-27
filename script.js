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
}

function addToLibrary(book) {
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

	// REMOVE BOOK
	let cell = row.insertCell();

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
addToLibrary(book0);
displayBookOnPage();

let book1 = createBook("Khaled Hosseini", "The Kite Runner", 371, "Yes");
addToLibrary(book1);
displayBookOnPage();

let book2 = createBook("Carl Jung", "Psychological Types", 100, "Yes");
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

	let book = createBook(author, title, pages, read);

	addToLibrary(book);

	displayBookOnPage();
})
