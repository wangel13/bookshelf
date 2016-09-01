import React, { Component } from 'react';
import AddBook from '../AddBook';
import Books from '../Books';
import Api from '../../Api'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      books: []
    };
  }

  componentDidMount () {
    Api.search().then((response) => (
        this.setState({
          isLoading: false,
          books: response
        })
      )
    )
  }

  render() {
    const { books } = this.state;
    return (
      <div className='App container'>
        <AddBook/>
        <Books books={books}/>
      </div>
    );
  }
}

export default App;
