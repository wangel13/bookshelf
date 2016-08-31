import React, { Component } from 'react';
// import './App.css';

class AddBook extends Component {
  render() {
    return (
      <div className=''>
        <h1>
          AddBook!!!
        </h1>
        <form>
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <div className="form-group">
                <label htmlFor="">
                  Заголовок
                </label>
                <input className="form-control" type="text"/>
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-4">
                  <div className="form-group">
                    <label htmlFor="">
                      Количество страниц
                    </label>
                    <input className="form-control" type="text"/>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-4">
                  <div className="form-group">
                    <label htmlFor="">
                      Год публикации
                    </label>
                    <input className="form-control" type="text"/>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-4">
                  <div className="form-group">
                    <label htmlFor="">
                      Дата выхода в тираж
                    </label>
                    <input className="form-control" type="text"/>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <a href="" className="btn btn-block btn-success">+ Автор</a>
              </div>
            </div>
            <div className="col-xs-6 col-sm-6">
              <div className="form-group">
                <label htmlFor="">
                  Издательство
                </label>
                <input className="form-control" type="text"/>
              </div>
              <div className="form-group">
                <label htmlFor="">
                  ISBN
                </label>
                <input className="form-control" type="text"/>
              </div>
              <div className="form-group">
                <a href="" className="btn btn-block btn-success">+ Изображение</a>
              </div>
            </div>
          </div>
          <a href="" className="btn btn-block btn-success">Добавить книгу в каталог</a>

        </form>
      </div>
    );
  }
}

export default AddBook;
