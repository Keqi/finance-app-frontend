function NavbarLinkItem({name, link }) {
  return (
    <li class="nav-item">
      <a class="nav-link" href={link}>{name}</a>
    </li>
  );
}

export default NavbarLinkItem;
