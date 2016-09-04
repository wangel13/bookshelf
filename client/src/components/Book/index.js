import React from 'react';
import './Book.css';

const Book = (props) =>
  <div className='b-book'>
    <div className="row">
      <div className="col-sm-3 col-xs-12">
        <img src={props.book.image_url} className="b-book-cover" alt={props.book.title}/>
      </div>
      <div className="col-sm-9 col-xs-12">
        <strong>ISBN:</strong> {props.book.ISBN}
        <br/>
        <strong>Заголовок:</strong> {props.book.title}
        <br/>
        <strong>Авторы:</strong>
        {props.book.authors && props.book.authors.map(item =>
          <div className="" key={item.name}>
            {item.name} {item.lastname}
          </div>
        )}
        <strong>Издатель:</strong> {props.book.publisher}
        <br/>
        <strong>Дата публикации:</strong> {props.book.publish_date}
        <br/>
        <strong>Страниц:</strong> {props.book.pages}
        <br/>
      </div>
    </div>
    <br/>
    <div className="row">
      <div className="col-xs-12 col-sm-6">
        <a onClick={(e) => props.handleEditBook(e, props.book)} href="" className="btn btn-warning btn-block">Редактировать</a>
      </div>
      <div className="col-xs-12 col-sm-6">
        <a onClick={(e) => props.handleDeleteBook(e, props.book)} href="" className="btn btn-danger btn-block">Удалить</a>
      </div>
    </div>
  </div>;

export default Book;
