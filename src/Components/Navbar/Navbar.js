import { NavLink } from 'react-router-dom';
import userIcon from '../image/user.png';
import './Navbar.css';

const Navbar = () => (
  <div className="nav">
    <div className="nav-link">
      <h1>Bookstore CMS</h1>
      <NavLink to="/">BOOKS</NavLink>
      <NavLink to="/categories">CATEGORIES</NavLink>
    </div>
    <img className="img" src={userIcon} alt="user" />
  </div>
);

export default Navbar;
