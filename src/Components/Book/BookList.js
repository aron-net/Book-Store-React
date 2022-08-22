import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/Book/book';

const BookList = (props) => {
  const { id, title, author } = props;
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(removeBook(id));
  };
  return (
    <li>
      <h2>{title}</h2>
      <p>{author}</p>
      <button type="button" onClick={clickHandler}>Remove Book</button>
    </li>
  );
};

BookList.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default BookList;
