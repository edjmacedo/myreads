import React from 'react'
import { Route } from 'react-router-dom'
import SearchBooks from './components/SearchBooks'
import BookList from './components/BookList'
import * as BooksAPI from './utils/BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    booksList: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((booksList) => {
      this.setState({ booksList })
    })
  }

  setNewShelfState = (bookUpdate, newShelf) => {
    BooksAPI.update(bookUpdate, newShelf).then(result => {
      BooksAPI.getAll().then((booksList) => {
        this.setState({ booksList })
      })
    })
  }

  render() {
    const { booksList } = this.state
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BookList
            books={booksList}
            setNewShelfState={this.setNewShelfState.bind(this)}
          />
        )} />
        <Route path="/search" render={() => (
          <SearchBooks
            books={booksList}
            setNewShelfState={this.setNewShelfState.bind(this)}
           />
        )} />
      </div>
    )
  }
}

export default BooksApp
