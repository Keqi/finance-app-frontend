import { Link } from 'react-router-dom';
import { NavbarLinkItemInterface } from './../../interfaces/interfaces'


function NavbarLinkItem({name, link}: NavbarLinkItemInterface) {
  return (
    <li className="nav-item">
      <Link className="nav-link" to={link}>{name}</Link>
    </li>
  );
}

export default NavbarLinkItem;
