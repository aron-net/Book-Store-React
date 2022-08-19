import PropTypes from 'prop-types';

const BookList = (props) => {
  const { title, author } = props;
  return (
    <li>
      <h2>{title}</h2>
      <p>{author}</p>
    </li>
  );
};

BookList.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default BookList;
