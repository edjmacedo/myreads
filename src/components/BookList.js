import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import CurrentlyShelf from './CurrentlyShelf'

class BookList extends Component {

  state = {
    shelf: [
      {
        name: "currentlyReading",
        displayName: "Currently Reading"
      },
      {
        name: "wantToRead",
        displayName: "Want to Read"
      },
      {
        name: "read",
        displayName: "Read"
      }
    ]
  }

  setCurrentlyShelf = (books, shelfState) => {
    const match = new RegExp(escapeRegExp(shelfState))
    return books.filter((book) => match.test(book.shelf))
  }

  render() {
    const { books, setNewShelfState } = this.props
    const { shelf } = this.state

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        {
          shelf.map((section, id) => (
            <CurrentlyShelf
              bookList={this.setCurrentlyShelf(books, section.name)}
              sectionTitle={section.displayName}
              setNewShelfState={setNewShelfState}
              key={id}
            />
          ))
        }
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default BookList
