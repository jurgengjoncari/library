module.exports = class Library extends Array {
	constructor() {
		super()
		this.booksList = []
		this.index = 0
		// return this.booksList
	}

	add (book) {
		this.booksList.push(book)

		this.index++
	}

	remove (book) {
		this.booksList = this.booksList.filter((myBook) => myBook.index != book.index)
	}

	set index(i) {}
}

// let myLibrary = new Library;

// module.exports = myLibrary