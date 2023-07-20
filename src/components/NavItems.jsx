/*Navbar items component */
//Only renders when setVisibility is True
const NavItems = ({ isVisible }) => {
  return isVisible ? (
    <ul className="navbar-nav">
      <li className="nav-item">
        <a href="#about">About me</a>
      </li>
      <li className="nav-item">
        <a href="#skills">Technical skills</a>
      </li>
      <li className="nav-item">
        <a href="#projects">Projects</a>
      </li>
      <li className="nav-item">
        <a href="#myCv">CV</a>
      </li>
    </ul>
  ) : null;
};

export default NavItems;
