const { expect } = require('@jest/globals')
const Library = require('./library')
// const myLibrary = require('./library')

test('Adds book to library', () => {
    const myLibrary = new Library
    const myBook = {
        title: 'The Da Vinci Code',
    }
    myLibrary.add(myBook)
    expect(myLibrary.booksList).toStrictEqual([myBook])
})

test('Create and Remove book from library', () => {
    const myLibrary = new Library
    console.log(myLibrary);
    const myBook = {
        title: 'The Da Vinci Code',
        index: 1
    }

    myLibrary.add(myBook)
    myLibrary.remove({index: 1})
    expect(myLibrary.booksList).toStrictEqual([])
})