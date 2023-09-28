import pkg from "react-icons/bi/index";
import { IconContext } from "react-icons";
import { useState } from "react";
const { BiMenu } = pkg;

/*Navbar button component - main component */
const NavButton = () => {
  const [visibility, setVisibility] = useState(null);

  window.onload = () => {
    window.innerWidth <= 600 ? setVisibility(false) : setVisibility(true);
  };

  window.onresize = () => {
    window.innerWidth <= 600 ? setVisibility(false) : setVisibility(true);
  };

  const handleVisible = () => {
    window.innerWidth <= 600 ? setVisibility(false) : null;
  };

  return (
    <>
      <button
        //button handle visibility of the navbar elements
        className="btn-menu"
        onClick={() => {
          //the state changes with each click on the button
          visibility == false ? setVisibility(true) : setVisibility(false);
        }}
      >
        <IconContext.Provider value={{ className: "react-icons" }}>
          <BiMenu />
        </IconContext.Provider>
      </button>
      {
        //the navbar items only render if the visibility is true
        visibility ? (
          <ul className="navbar-nav" id="navList">
            <li className="nav-item" id="NavItem" onClick={handleVisible}>
              <a href="#about">About me</a>
            </li>
            <li className="nav-item" id="NavItem" onClick={handleVisible}>
              <a href="#skills">Technical skills</a>
            </li>
            <li className="nav-item" id="NavItem" onClick={handleVisible}>
              <a href="#projects">Projects</a>
            </li>
            <li className="nav-item" id="NavItem" onClick={handleVisible}>
              <a href="#myCv">CV</a>
            </li>
          </ul>
        ) : null
      }
    </>
  ); //return
}; //NavButton component

export default NavButton;
