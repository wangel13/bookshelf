import React from 'react';
import './Book.css';

const Book = (props) =>
  <div className='b-book'>
    <img src={props.book.image_url} alt=""/>
    Book #{props.book.id}
    <br/>
    Title: {props.book.title}
    <br/>
    Pages: {props.book.pages}
    <br/>
    Publish date: {props.book.publish_date}
    <br/>
    Publisher: {props.book.publisher}
    <br/>
    ISBN: {props.book.ISBN}
    <br/>
    {props.book.title}
  </div>;

export default Book;
