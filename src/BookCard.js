import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BookCard extends Component {
  static propTypes = {
    onChangeShelf: PropTypes.func.isRequired,
    book: PropTypes.object.isRequired,
  }
  render () {
    const {book, onChangeShelf } = this.props
    
    
    return (
        <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.smallThumbnail}")` }}></div>
          <div className="book-shelf-changer">
            <select onChange={(e) => onChangeShelf (book, e.target.value) } value={book.shelf} >
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    )
  }
}

export default BookCard
