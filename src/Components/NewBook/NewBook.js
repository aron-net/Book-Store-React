import Category from '../Book/Category';

const NewBook = () => (
  <div>
    <h2>ADD NEW BOOK</h2>
    <form>
      <input type="text" placeholder="Book title" />
      <Category />
      <button type="submit">ADD BOOK</button>
    </form>
  </div>
);

export default NewBook;
