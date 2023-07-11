import { Link } from 'react-router-dom';

function NavbarLinkItem({name, link }) {
  return (
    <li className="nav-item">
      <Link className="nav-link" to={link}>{name}</Link>
    </li>
  );
}

export default NavbarLinkItem;
