import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../utils/BooksAPI'
import Book from './Book'

class SearchBooks extends Component {

  state = {
    query: '',
    booksListSearched: []
  }

  searchBooks = (query) => {
    const booksList = this.props.books
    const querySearch = query.trim()
    if (querySearch && querySearch.length) {
      BooksAPI.search(querySearch, 10).then((books) => {
        if (books && books.length) {
          let booksObject = books.map((book) => {
            let booksInList
            booksList.forEach((bookList) => {
              if (bookList.id === book.id) {
                booksInList = booksList
              }
            })
            book.shelf = booksInList ? booksInList.shelf : 'none'
            return book
          })
          this.setState({ booksListSearched: booksObject })
        } else {
          this.setState({ booksListSearched: [] })
        }
      })
    }
  }

  render() {
    const { booksListSearched } = this.state
    const { setNewShelfState } = this.props
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={(event) => this.searchBooks(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {
              booksListSearched.map((book) => (
                <Book
                  key={book.id}
                  book={book}
                  setNewShelfState={setNewShelfState}
                />
              ))
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks
