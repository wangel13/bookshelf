import React, { Component } from 'react';
import Book from '../Book'
import './Books.css';

class Books extends Component {
  render() {
    const { books } = this.props;
    return (
      <div className='b-books'>
        {books && books.map(book =>
          <Book key={book.id} book={book}/>
        )}
      </div>
    );
  }
}

export default Books;
