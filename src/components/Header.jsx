import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="main-head">
    <h1>Bookstore CMS</h1>
    <nav>
      <ul className="links">
        <li><NavLink className="link" to="/">Books</NavLink></li>
        <li>
          <NavLink className="link" to="/categories">Categories</NavLink>
        </li>
      </ul>  
    </nav>  
    <div className="profile">
      <span className="material-icons">person</span>
    </div>
  </header>  
);

export default Header;