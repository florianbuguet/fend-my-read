import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookCard from './BookCard'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'



class Search extends Component {
  state = {
    query : '',
    books: [],
  }

  static propTypes = {
        books: PropTypes.array.isRequired,
        onChangeShelf: PropTypes.func.isRequired,
      }
  

  searchQuery = query => {
    if(query.length >0){
      this.setState({query})
      BooksAPI.search(query)
        .then ((books)=>{
          this.setState({ books: books.filter(b => b.imageLinks && b.imageLinks.smallThumbnail) })
            return({books})
        })
      
    }
        else {
          this.setState({query:''})
        }
  }
   

  render () {
    const { onChangeShelf } = this.props
    
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            {/*
                        NOTES: The search from BooksAPI is limited to a particular set of search terms.
                        You can find these search terms here:
                        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                        you don't find a specific author or title. Every search is limited by search terms.
                    */}
            <input 
            type="text" 
            placeholder="Search by title or author"
            value={this.state.query}
            onChange={(event) => this.searchQuery(event.target.value)}
            
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          {this.state.books.map((book) => (
                       
                        <li>
                          <BookCard book={book} onChangeShelf={onChangeShelf} />
                        </li>
                      
                    ))}
            {/* NOTE: parvenir à afficher le texte dans la requete et filtrer sur les book qui n'ont pas de shelf + gérer le changement de shelf + ajouter le bouton du search */}
               

          </ol>

        </div>
      </div>

    )
  }
}

export default Search