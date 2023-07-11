import { useState } from "react";
import MenuButton from "./MenuButton";
import "./Nav.css";

/*Barra de navegación responsiva */
//si el tamaño de la ventana es igual o menor a 600 se renderiza el botón de la barra de navegación
const Nav = () => {
  const [vWidth, setResult] = useState(null);
  window.onresize = () => {
    setResult(() => {
      if (window.innerWidth <= 600) {
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
        <MenuButton isRender={vWidth} />
      </div>
    </nav>
  );
};

export default Nav;
