import React, { Component } from 'react';
import AddBook from '../AddBook';
import Books from '../Books';
import './App.css';

const books = [
  {
    id: 1,
    title: 'Slow reading',
    authors : [
      {
        name: 'John',
        lastname: 'Miedema'
      },
      {
        name: 'Sandro',
        lastname: 'Megusto'
      }
    ],
    pages: 1000,
    publish_date: 'March 2009',
    publisher: 'Litwin Books',
    ISBN: '9780980200447',
    image_url: 'https://covers.openlibrary.org/b/id/5546156-L.jpg'
  },
  {id: 2},
  {id: 3},
  {id: 4},
  {id: 5},
  {id: 6},
  {id: 7}
];

class App extends Component {
  render() {
    return (
      <div className='App container'>
        <AddBook/>
        <Books books={books}/>
      </div>
    );
  }
}

export default App;
