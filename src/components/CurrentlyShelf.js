import React, { Component } from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

class CurrentlyShelf extends Component {

  static propTypes = {
    bookList: PropTypes.array.isRequired,
    sectionTitle: PropTypes.string.isRequired,
    setNewShelfState: PropTypes.func.isRequired
  }

  render() {
    const { bookList, sectionTitle, setNewShelfState } = this.props
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
                      setNewShelfState={setNewShelfState}
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
