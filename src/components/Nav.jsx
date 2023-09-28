import NavButton from "./NavButton";
import "./Nav.css";

/*Barra de navegación responsiva */
const Nav = () => {
  return (
    <nav>
      <div className="navbar">
        <a href="#start" className="brand" title="Start">
          <img
            src="./logotype_miguel-romero.png"
            alt="Logotipo"
            className="logo"
          />
          Miguel Romero
        </a>
        <NavButton />
      </div>
    </nav>
  );
};

export default Nav;
