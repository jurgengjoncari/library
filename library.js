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
		this.booksList.filter((myBook) => {
            console.log(`myBook.index: ${myBook.index}`);
            console.log(`book.index: ${book.index}`)
            if (myBook.index == book.index) {
                console.log(`myBook.index == book.index is ${myBook.index == book.index}`);
                return false
            }
        })
        console.log(this.booksList);
	}
}

// let myLibrary = new Library;

// module.exports = myLibrary