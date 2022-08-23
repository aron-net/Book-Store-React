import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import BookList from '../Book/BookList';
import NewBook from '../NewBook/NewBook';
import './Book.css';

const Book = () => {
  const newBook = useSelector((state) => state.books, shallowEqual);
  return (
    <ul>
      {newBook.map((data) => (
        <BookList key={data.id} id={data.id} title={data.title} author={data.author} />
      ))}
      <NewBook />
    </ul>
  );
};

export default Book;
