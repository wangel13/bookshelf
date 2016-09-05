import React, { Component } from 'react';
import Api from '../../Api';
import ISBNvalidator from '../../utils/ISBNValidator';
import './EditBook.css';

class EditBook extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      validationISBN: true,
      book: props.editBook,
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      book: props.editBook
    });
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.validateFormData()) {
      this.setState({
        isLoading: true
      });
      this.sendFormData()
    }
  }

  validateFormData = () => {
    if(ISBNvalidator(this.state.book.ISBN)) {
      this.setState({
        validationISBN: true
      });
      return true;
    } else {
      this.setState({
        validationISBN: false
      });
      return false;
    }
  }

  sendFormData = () => {
    Api.editBook(this.state.book).then((response) => {
        this.setState({
          isLoading: false
        })
        this.props.onBooksUpdate()
      }
    );
  }

  addAuthorInput = (e) => {
    e.preventDefault();
    let newInput = {
      "name": "",
      "lastname": ""
    };
    let book = this.state.book;
    book.authors.push(newInput);
    this.setState({ book: book });
  }

  handleChangeInput = (e) => {
    let book = this.state.book;
    book[e.target.name] = e.target.value
    this.setState({
      book: book
    })
  }

  handleChangeNameAuthor = (e, index) => {
    let book = this.state.book;
    book.authors[index].name = e.target.value
    this.setState({
      book: book
    })
  }

  handleChangeLastNameAuthor = (e, index) => {
    let book = this.state.book;
    book.authors[index].lastname = e.target.value
    this.setState({
      book: book
    })
  }

  render() {
    const { validationISBN
          , isLoading
          , book } = this.state
    const { authors } = book
    const { changeEditMode } = this.props
    return (
      <div className="b-operations">
        <div className="panel panel-default">
          <div className="panel-heading">
            Редактировать книгу
          </div>
          <div className="panel-body">
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="col-xs-12 col-sm-6">
                  <div className="form-group">
                    <label htmlFor="">
                      Заголовок
                    </label>
                    <input onChange={this.handleChangeInput} name="title" value={book.title} className="form-control" type="text" maxLength="20" required disabled={isLoading}/>
                  </div>
                  {authors && authors.map((item,index) =>
                    <div className="row" key={item.name}>
                      <div className="col-sm-6 col-xs-12">
                        <div className="form-group">
                          <label htmlFor="">
                            Фамилия автора
                          </label>
                          <input onChange={(e) => this.handleChangeLastNameAuthor(e, index)} value={item.lastname} name="lastname" className="form-control" type="text" maxLength="20" required disabled={isLoading}/>
                        </div>
                      </div>
                      <div className="col-sm-6 col-xs-12">
                        <div className="form-group">
                          <label htmlFor="">
                            Имя автора
                          </label>
                          <input onChange={(e) => this.handleChangeNameAuthor(e, index)} value={item.name} className="form-control" type="text" maxLength="20" required disabled={isLoading}/>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="form-group">
                    <a href="" onClick={this.addAuthorInput} className="btn btn-block btn-success" disabled={isLoading}>+ Автор</a>
                  </div>

                </div>
                <div className="col-xs-6 col-sm-6">
                  <div className="form-group">
                    <label htmlFor="">
                      Издательство
                    </label>
                    <input onChange={this.handleChangeInput} value={book.publisher} className="form-control" type="text" maxLength="30" required disabled={isLoading}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="">
                      ISBN
                    </label>
                    <input onChange={this.handleChangeInput} value={book.ISBN} className="form-control" type="text" required disabled={isLoading}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="">
                      Количество страниц
                    </label>
                    <input onChange={this.handleChangeInput} value={book.pages} className="form-control" type="number" max="10000" min="0" required disabled={isLoading}/>
                  </div>
                  <div className="row">
                    <div className="col-xs-12 col-sm-6">
                      <div className="form-group">
                        <label htmlFor="">
                          Год публикации
                        </label>
                        <input onChange={this.handleChangeInput} value={book.publish_date} className="form-control" type="date" min="1800-01-01" required disabled={isLoading}/>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6">
                      <div className="form-group">
                        <label htmlFor="">
                          Дата выхода в тираж
                        </label>
                        <input onChange={this.handleChangeInput} value={book.publish_print_date} className="form-control" type="date" min="1800-01-01" required disabled={isLoading}/>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="">
                      Обложка
                    </label>
                    <input type="file" disabled={isLoading}/>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-6">
                  <button type="submit" className="btn btn-block btn-success" disabled={isLoading}>Сохранить изменения</button>
                </div>
                <div className="col-xs-6">
                  <a href="#" className="btn btn-danger btn-block" onClick={changeEditMode}>Отмена</a>
                </div>
              </div>
              <br/>
              {validationISBN
                ? ''
                : <div className="alert alert-danger" role="alert">Код ISBN - не верен, перепроверьте.</div>}

            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default EditBook;
