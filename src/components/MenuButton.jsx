import { BiMenu } from "react-icons/bi";
import { IconContext } from "react-icons";

/*Componente de botón o lista de enlaces */
//Se renderiza el botón o la lista de enlaces según en tamaño de la ventana
const MenuButton = ({ isRender }) => {
  if (isRender) {
    return (
      <button className="btn-menu">
        <IconContext.Provider value={{ className: "react-icons" }}>
          <BiMenu />
        </IconContext.Provider>
      </button>
    );
  } else {
    return (
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="">Home</a>
        </li>
        <li className="nav-item">
          <a href="">About me</a>
        </li>
        <li className="nav-item">
          <a href="">Technical skills</a>
        </li>
        <li className="nav-item">
          <a href="">Projects</a>
        </li>
      </ul>
    );
  }
};

export default MenuButton;
