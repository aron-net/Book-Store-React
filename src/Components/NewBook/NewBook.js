import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as rid } from 'uuid';
import { addBook } from '../../redux/Book/book';
import './NewBook.css';

const NewBook = () => {
  const dispatch = useDispatch();
  const [titleName, setTitle] = useState('');
  const [authorName, setAuthor] = useState('');
  const addBookHandler = (e) => {
    e.preventDefault();
    const book = {
      id: rid(),
      title: titleName,
      author: authorName,
      category: 'not categorized yet',
    };
    dispatch(addBook(book));
    setTitle('');
    setAuthor('');
  };
  return (
    <section className="ar">
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={addBookHandler}>
        <input type="text" value={titleName} onInput={(e) => setTitle(e.target.value)} placeholder="Book title" required="" />
        <input type="text" value={authorName} onInput={(e) => setAuthor(e.target.value)} placeholder="Author" required="" />
        <button type="submit">ADD BOOK</button>
      </form>
    </section>
  );
};

export default NewBook;
