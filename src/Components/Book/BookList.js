import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/Book/book';
import './BookList.css';

const BookList = (props) => {
  const {
    id,
    title,
    author,
    category,
  } = props;
  const randomPercentge = Math.floor(Math.random() * (100 - 0 + 1) + 0);
  const randomChapter = Math.floor(Math.random() * (20 - 0 + 1) + 0);
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(removeBook(id));
  };
  return (
    <li>
      <div className="book-card">
        <h4 className="category">{category}</h4>
        <h2 className="title">{title}</h2>
        <h6 className="author">{author}</h6>
        <div className="btn">
          <p className="comment">Comments</p>
          <button className="removeBtn" type="button" onClick={clickHandler}>Remove Book</button>
          <p className="edit">Edit</p>
        </div>
      </div>
      <div className="book-progress">
        <div className="progress-container">
          <div className="circular-progress-container">
            <div role="progressbar" aria-label="progress Bar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style={{ '--value': randomPercentge }} />
          </div>
          <div className="progress-stat">
            <p className="percent-complete">
              {`${randomPercentge}%`}
            </p>
            <p className="completed">Completed</p>
          </div>
        </div>
      </div>
      <div className="current-chapter-container">
        <div>
          <p className="current-chapter-label">CURRENT CHAPTER</p>
          <p className="current-chapter">
            {`Chapter ${randomChapter}`}
          </p>
        </div>
        <button className="primary-button" type="button">UPDATE PROGRESS</button>
      </div>
    </li>
  );
};

BookList.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
export default BookList;
