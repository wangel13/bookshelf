import React, { Component } from 'react';
import Book from '../Book';
import './Books.css';

class Books extends Component {

  sortBy = (e, sort) => {
    e.preventDefault();
    this.props.onBooksUpdate(sort);
  }

  render() {
    const { books
           ,handleDeleteBook
           ,handleEditBook } = this.props;
    return (
      <div className='b-books'>
        <div className="page-header">
          <h1>Список книг на полке</h1>
        </div>
        <a onClick={(e) => this.sortBy(e, 'title')} className="btn btn-default" href="#" role="button">По названию</a>
        <a onClick={(e) => this.sortBy(e, 'publish_date')} className="btn btn-default" href="#" role="button">По году публикации</a>
        <br/>
        <br/>
        {books && books.map(book =>
          <Book key={book.id} book={book} handleDeleteBook={handleDeleteBook} handleEditBook={handleEditBook}/>
        )}
      </div>
    );
  }
}

export default Books;
