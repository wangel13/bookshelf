import React, { Component } from 'react';
import AddBook from '../AddBook';
import EditBook from '../EditBook';
import Books from '../Books';
import Api from '../../Api';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      books: [],
      editBook: {},
      isEditing: false
    };
  }

  componentDidMount () {
    this.updateBooks()
  }

  updateBooks = () => {
    Api.getBooks().then((response) => (
        this.setState({
          isLoading: false,
          books: response
        })
      )
    )
  }

  handleEditBook = (e, book) => {
    e.preventDefault()
    this.setState({
      editBook: book,
      isEditing: true
    })
  }

  handleDeleteBook = (e, book) => {
    e.preventDefault()
    Api.delBook(book).then((response) => (
        this.setState({
          isLoading: false,
          books: response
        })
      )
    )
    console.log('Delete');
  }

  render() {
    const { books
          , editBook
          , isEditing } = this.state;

    let operations = null;
    if (isEditing) {
      operations = <EditBook onBooksUpdate={this.updateBooks} editBook={editBook} isEditing={isEditing}/>
    } else {
      operations = <AddBook onBooksUpdate={this.updateBooks}/>
    }

    return (
      <div className="App container">
        <div className="row">
          <div className="col-xs-12 col-sm-5">
            <Books books={books} handleDeleteBook={this.handleDeleteBook} handleEditBook={this.handleEditBook}/>
          </div>
          <div className="col-xs-12 col-sm-7">
            {operations}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
