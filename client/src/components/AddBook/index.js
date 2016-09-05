import React, { Component } from 'react';
import uuid from 'node-uuid';
import Api from '../../Api';
import ISBNvalidator from '../../utils/ISBNValidator';
import './AddBook.css';

class AddBook extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      validationISBN: true,
      authorsInputs: [0]
    };
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
    if(ISBNvalidator(this.refs.isbn.value)) {
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
    let authors = [];
    this.state.authorsInputs.forEach((item) => {
      let author = {
        "name": this.refs['authorName' + item].value,
        "lastname": this.refs['authorLastName' + item].value,
      }
      authors.push(author);
    })

    const passData = (image = '') => {
      let book = {
          "id": uuid.v1(),
          "title": this.refs.bookTitle.value,
          "authors" : authors,
          "pages": this.refs.pages.value,
          "publish_date": this.refs.publish_date.value,
          "publish_print_date": this.refs.publish_print_date.value,
          "publisher": this.refs.publisher.value,
          "ISBN": this.refs.isbn.value,
          "image_url": image
      };
      Api.addBook(book).then((response) => {
          this.setState({
            isLoading: false
          })
          this.props.onBooksUpdate()
        }
      );
    }

    let image_url = this.refs.image_url.files[0];
    console.log(image_url);
    let reader = new FileReader();
    if (image_url) {
      reader.readAsDataURL(image_url);
      reader.onload = () => {
        passData(reader.result)
      }
    } else {
      passData()
    }

  }

  addAuthor = (e) => {
    e.preventDefault();
    var newInput = this.state.authorsInputs.length;
    this.setState({ authorsInputs: this.state.authorsInputs.concat(newInput)});
  }

  render() {
    const { authorsInputs
          , validationISBN
          , isLoading } = this.state
    return (
      <div className="b-operations">
        <div className="panel panel-default">
          <div className="panel-heading">
            Добавить книгу на полку
          </div>
          <div className="panel-body">
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="col-xs-12 col-sm-6">
                  <div className="form-group">
                    <label htmlFor="">
                      Заголовок
                    </label>
                    <input name="title" ref="bookTitle" className="form-control" type="text" maxLength="20" required disabled={isLoading}/>
                  </div>
                  {authorsInputs && authorsInputs.map(item =>
                    <div className="row" key={item}>
                      <div className="col-sm-6 col-xs-12">
                        <div className="form-group">
                          <label htmlFor="">
                            Фамилия автора
                          </label>
                          <input name="lastname" ref={'authorLastName' + item} className="form-control" type="text" maxLength="20" required disabled={isLoading}/>
                        </div>
                      </div>
                      <div className="col-sm-6 col-xs-12">
                        <div className="form-group">
                          <label htmlFor="">
                            Имя автора
                          </label>
                          <input ref={'authorName' + item} className="form-control" type="text" maxLength="20" required disabled={isLoading}/>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="form-group">
                    <a href="" onClick={this.addAuthor} className="btn btn-block btn-success" disabled={isLoading}>+ Автор</a>
                  </div>

                </div>
                <div className="col-xs-6 col-sm-6">
                  <div className="form-group">
                    <label htmlFor="">
                      Издательство
                    </label>
                    <input ref="publisher" className="form-control" type="text" maxLength="30" required disabled={isLoading}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="">
                      ISBN
                    </label>
                    <input ref="isbn" className="form-control" type="text" required disabled={isLoading}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="">
                      Количество страниц
                    </label>
                    <input ref="pages" className="form-control" type="number" max="10000" min="0" required disabled={isLoading}/>
                  </div>
                  <div className="row">
                    <div className="col-xs-12 col-sm-6">
                      <div className="form-group">
                        <label htmlFor="">
                          Год публикации
                        </label>
                        <input ref="publish_date" className="form-control" type="date" min="1800-01-01" required disabled={isLoading}/>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6">
                      <div className="form-group">
                        <label htmlFor="">
                          Дата выхода в тираж
                        </label>
                        <input ref="publish_print_date" className="form-control" type="date" min="1800-01-01" required disabled={isLoading}/>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="">
                      Обложка
                    </label>
                    <input ref="image_url" type="file" disabled={isLoading}/>
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-block btn-success" disabled={isLoading}>Добавить книгу в каталог</button>
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

export default AddBook;
