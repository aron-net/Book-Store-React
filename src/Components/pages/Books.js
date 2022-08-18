import BookList from '../Book/BookList';
import NewBook from '../NewBook/NewBook';
/* eslint-disable react/prop-types */

const Book = ({ items }) => (
  <ul>
    {items.map((item) => (
      <BookList key={item.id} title={item.title} author={item.author} />
    ))}
    ;
    <NewBook />
  </ul>
);

// Book.propTypes = {
//   items: PropTypes.string.isRequired,
// };

export default Book;
