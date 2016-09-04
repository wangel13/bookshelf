import React, { Component } from 'react';
import Book from '../Book'
import './Books.css';

class Books extends Component {


  render() {
    const { books
           ,handleDeleteBook
           ,handleEditBook } = this.props;
    return (
      <div className='b-books'>
        <div className="page-header">
          <h1>Список книг на полке</h1>
        </div>
        {books && books.map(book =>
          <Book key={book.id} book={book} handleDeleteBook={handleDeleteBook} handleEditBook={handleEditBook}/>
        )}
      </div>
    );
  }
}

export default Books;
