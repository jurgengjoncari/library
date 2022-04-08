module.exports = class Library {
	constructor() {
		this.booksList = []
		this.index = 0
	}

	add (book) {
		this.booksList.push(book)

		this.index++
	}

	remove (book) {
		this.booksList = this.booksList.filter((myBook) => myBook.index == book.index)
	}
}

// let myLibrary = new Library;

// module.exports = myLibrary