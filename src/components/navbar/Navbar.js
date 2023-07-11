import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'

import NavbarLinkItem from './NavbarLinkItem'

function Navbar() {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand mr-5 h1">
          <FontAwesomeIcon icon={faDollarSign} size="xl" />
        </span>

        <div className="collapse navbar-collapse d-flex justify-content-start">
          <ul className="navbar-nav mr-auto">
            <NavbarLinkItem
              name="Data"
              link="/"
            />

            <NavbarLinkItem
              name="Charts"
              link="/charts"
            />

            <NavbarLinkItem
              name="Insert record"
              link="/insert-record"
            />
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
