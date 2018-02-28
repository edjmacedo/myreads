import React, { Component } from 'react'
import Book from './Book'

class CurrentlyShelf extends Component {

  render() {
    const { bookList, sectionTitle } = this.props
    return (
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">{sectionTitle}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
              {
                bookList.map((book, id) => (
                  <li key={id}>
                    <Book
                      key={book.id}
                      book={book}
                    />
                  </li>
                ))
              }
              </ol>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CurrentlyShelf
