import React from 'react'
import { Route } from 'react-router-dom'
import SearchBooks from './SearchBooks'
import BookList from './BookList'
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

  render() {
    const { booksList } = this.state
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BookList />
        )} />
        <Route path="/search" render={() => (
          <SearchBooks
            books={booksList}
           />
        )} />
      </div>
    )
  }
}

export default BooksApp
