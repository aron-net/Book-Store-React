import { NavLink } from 'react-router-dom';
import userIcon from '../image/user.png';
import './Navbar.css';

const Navbar = () => (
  <div className="nav">
    <div className="nav-link">
      <h1 className="header">Bookstore CMS</h1>
      <NavLink className="nav-book" to="/">BOOKS</NavLink>
      <NavLink className="nav-category" to="/categories">CATEGORIES</NavLink>
    </div>
    <img className="img" src={userIcon} alt="user" />
  </div>
);

export default Navbar;
