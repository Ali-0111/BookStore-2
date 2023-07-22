import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const NavItem = ({link, label}) => {
  return (
    <li>
      <NavLink className="link text-style-6 opacity-50" to={link}>
        {label}
      </NavLink>
    </li>
  );
}

NavItem.propTypes = {
  link: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

export default NavItem;