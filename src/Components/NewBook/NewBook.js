import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/Book/book';
import './NewBook.css';

const NewBook = () => {
  const dispatch = useDispatch();
  const addBookHandler = (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const author = e.target[1].value;
    dispatch(addBook(title, author));
  };
  return (
    <div className="ar">
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={addBookHandler}>
        <input onChange={() => {}} type="text" placeholder="Book title" />
        <input onChange={() => {}} type="text" placeholder="Author" />
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default NewBook;
