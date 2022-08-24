import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { checkStatus } from '../../redux/Categories/categories';
import './category.css';

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories, shallowEqual);
  const checkHandler = () => {
    dispatch(checkStatus());
  };
  const Button = <button className="category-button" type="button" onClick={checkHandler}>Check status</button>;
  return (
    <div>
      <h2 className="category-title">{categories}</h2>
      {Button}
    </div>
  );
};

export default Categories;
