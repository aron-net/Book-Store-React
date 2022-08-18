import PropTypes from 'prop-types';
import BookList from '../Book/BookList';
import NewBook from '../NewBook/NewBook';

const Book = (props) => {
  const { items } = props;
  return (
    <ul>
      {items.map((data) => (
        <BookList key={data.id} title={data.title} author={data.author} />
      ))}
      ;
      <NewBook />
    </ul>
  );
};

Book.propTypes = {
  items: PropTypes.string.isRequired,
};

export default Book;
