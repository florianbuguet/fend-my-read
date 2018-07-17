import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookCard from './BookCard'
import { Link } from 'react-router-dom'


class ListShelves extends Component {
  static propTypes = {
    onChangeShelf: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired,
  }
  

  render () {
    const {books, onChangeShelf} = this.props;
    return (
      <div className='list-books'>
      <Link className="open-search" to='/search'></Link>  
        <div className='list-books-title'>
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {books.filter(b => b.shelf === 'currentlyReading').map(book => {
                      return (
                        <li>
                          <BookCard book={book} onChangeShelf={onChangeShelf} />
                        </li>
                      )
                    })}
                    
                  </ol>
                </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {books.filter(b => b.shelf === 'wantToRead').map(book => {
                      return (
                        <li>
                          <BookCard book={book} onChangeShelf={onChangeShelf} />
                        </li>
                      )
                    })}
                    
                  </ol>
                </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {books.filter(b => b.shelf === 'read').map(book => {
                      return (
                        <li>
                          <BookCard book={book} onChangeShelf={onChangeShelf} />
                        </li>
                      )
                    })}
                    
                  </ol>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ListShelves
