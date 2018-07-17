import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListShelves from './ListShelves'
import Search from './Search'

class BooksApp extends Component {
  state = {
    books : []
  }

  componentDidMount () {
    BooksAPI.getAll().then(books => {
      this.setState({books})
    })
  }  
  
  onChangeShelf = (book,shelf) => {
    console.log(book,shelf)
    BooksAPI.update(book, shelf)
      .then((books) => {
        console.log(books)
        BooksAPI.getAll().then(books => {
          this.setState({books})
        })
      })
  }

  render () {
    return (
      <div className='app'>
            
        <Switch>
          <Route exact path='/' render={() => (
            <ListShelves
            books={this.state.books}
            onChangeShelf={this.onChangeShelf}
            />
          )}/>
        </Switch>
          <Route path='/search'  render={( ) => (
            <Search
            books={this.state.books}
            onChangeShelf={this.onChangeShelf} 
            />
          )}/>
      </div>
    )
  }
}

export default BooksApp
