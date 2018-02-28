import React, { Component } from 'react'

class Book extends Component {

  state = {
    title: !this.props.book.title ? ["Unknown"] : this.props.book.title,
    authors: !this.props.book.authors ? ["Unknown"] : this.props.book.authors,
    thumbnails: !this.props.book.imageLinks ? [""] : this.props.book.imageLinks,
    shelf: this.props.book.shelf
  }

  setNewShelfState = (value) => {
    const { setNewShelfState } = this.props
    setNewShelfState(this.props.book, value)
  }

  render() {
    const { title, authors, thumbnails, shelf } = this.state
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${thumbnails.thumbnail}"` }}></div>
          <div className="book-shelf-changer">
            <select
              defaultValue={shelf}
              onChange={(event) => this.setNewShelfState(event.target.value)}
            >
              <option value="moveTo" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        {
          authors.map((author) => (
            <div className="book-authors" key={author}>{author}</div>
          ))
        }
      </div>
    )
  }
}

export default Book
