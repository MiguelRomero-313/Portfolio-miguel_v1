import { useState } from "react";
import NavButton from "./NavButton";
import "./Nav.css";

/*Barra de navegación responsiva */
//si el tamaño de la ventana es igual o menor a 600 se renderiza el botón de la barra de navegación
const Nav = () => {
  const [windowWidth, setWidth] = useState(null);
  window.onload = () => {
    setWidth(() => {
      if (window.innerWidth <= 600) {
        return true;
      } else {
        return false;
      }
    });
  };

  window.onresize = () => {
    setWidth(() => {
      if (window.innerWidth <= 650) {
        return true;
      } else {
        return false;
      }
    });
  };

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
        <NavButton isRender={windowWidth} />
      </div>
    </nav>
  );
};

export default Nav;
